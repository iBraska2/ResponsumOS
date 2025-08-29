// Auth-Konfiguration für ResponsumOS Wartungsmodus
// Diese Datei sollte in der Produktion durch Umgebungsvariablen ersetzt werden

export const AUTH_CONFIG = {
  // Zugangsdaten über Umgebungsvariablen (sicherer für Produktion)
  credentials: {
    username: process.env.NEXT_PUBLIC_MAINTENANCE_USERNAME || 'admin',
    password: process.env.NEXT_PUBLIC_MAINTENANCE_PASSWORD || 'responsum2025'
  },
  
  // Session-Konfiguration
  session: {
    key: 'responsumos_auth',
    duration: parseInt(process.env.NEXT_PUBLIC_SESSION_DURATION || '86400000') // 24 Stunden Standard
  }
};

// Hilfsfunktion zur Validierung der Anmeldedaten
export const validateCredentials = (username: string, password: string): boolean => {
  return username === AUTH_CONFIG.credentials.username && 
         password === AUTH_CONFIG.credentials.password;
};

// Hilfsfunktion zur Session-Verwaltung
export const setAuthSession = () => {
  const sessionData = {
    authenticated: true,
    timestamp: Date.now(),
    expires: Date.now() + AUTH_CONFIG.session.duration
  };
  localStorage.setItem(AUTH_CONFIG.session.key, JSON.stringify(sessionData));
};

export const getAuthSession = () => {
  const session = localStorage.getItem(AUTH_CONFIG.session.key);
  if (!session) return null;
  
  try {
    const sessionData = JSON.parse(session);
    if (sessionData.expires < Date.now()) {
      // Session abgelaufen
      localStorage.removeItem(AUTH_CONFIG.session.key);
      return null;
    }
    return sessionData;
  } catch {
    return null;
  }
};

export const clearAuthSession = () => {
  localStorage.removeItem(AUTH_CONFIG.session.key);
};
