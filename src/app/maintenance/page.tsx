'use client';

import { useState } from 'react';
import { validateCredentials, setAuthSession } from '../../lib/auth';

const MaintenancePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simuliere eine kurze Verzögerung für bessere UX
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (validateCredentials(username, password)) {
      setAuthSession();
      // Redirect zur Hauptseite nach erfolgreichem Login
      window.location.href = '/';
    } else {
      setError('Ungültige Anmeldedaten. Bitte versuchen Sie es erneut.');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo und Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white font-bold text-2xl">R</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Responsum<span className="relative">
              O
              <span className="absolute inset-0 w-6 h-6 border-2 border-cyan-400 rounded-full opacity-60 transform translate-x-1 translate-y-1"></span>
            </span>S
          </h1>
          <p className="text-gray-300">Wartungsmodus aktiv</p>
        </div>

        {/* Wartungsnachricht */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-6 border border-gray-700">
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
            <h2 className="text-lg font-semibold text-white">Website in Wartung</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Wir arbeiten derzeit an Verbesserungen für ResponsumOS. 
            Für den Zugriff auf die Website benötigen Sie gültige Anmeldedaten.
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Administrator Login</h3>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                Benutzername
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Benutzername eingeben"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Passwort
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Passwort eingeben"
                required
              />
            </div>

            {error && (
              <div className="bg-red-900/50 border border-red-700 rounded-lg p-3">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Anmeldung läuft...
                </div>
              ) : (
                'Anmelden'
              )}
            </button>
          </form>

          {/* Hinweis */}
          <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-700">
            <h4 className="text-sm font-medium text-blue-300 mb-2">Zugriff beschränkt</h4>
            <div className="text-xs text-blue-200 space-y-1">
              <div>Nur autorisierte Benutzer haben Zugriff auf die Website.</div>
              <div>Kontaktieren Sie den Administrator für Zugangsdaten.</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            © 2025 ResponsumOS • Wartungsmodus v1.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;
