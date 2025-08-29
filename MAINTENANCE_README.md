# ResponsumOS Wartungsmodus - Sicherheitsanleitung

## 🛡️ Aktuelle Implementierung

Die Website ist jetzt durch einen Wartungsmodus geschützt. Standardmäßig wird eine Wartungsseite angezeigt, und nur autorisierte Benutzer können auf die vollständige Website zugreifen.

## 🔐 Zugangsdaten (NUR FÜR ENTWICKLUNG)

**⚠️ WICHTIG:** Diese Zugangsdaten sind nur für Entwicklungszwecke gedacht!

- **Benutzername:**
- **Passwort:** 

## 🚨 Sicherheitsmaßnahmen für die Produktion

### 1. Lokale Entwicklung
Erstelle eine `.env.local` Datei im Root-Verzeichnis:

```bash
# .env.local erstellen (falls noch nicht vorhanden)
touch .env.local
```

Füge folgende Umgebungsvariablen hinzu:
```env
# ResponsumOS Wartungsmodus - Umgebungsvariablen
NEXT_PUBLIC_MAINTENANCE_USERNAME=dein_admin_username
NEXT_PUBLIC_MAINTENANCE_PASSWORD=dein_sicheres_passwort
NEXT_PUBLIC_SESSION_DURATION=86400000
```

### 2. Vercel Deployment
In deinem Vercel Dashboard musst du folgende Umgebungsvariablen setzen:

**Variablen-Name in Vercel:**
- `NEXT_PUBLIC_MAINTENANCE_USERNAME`
- `NEXT_PUBLIC_MAINTENANCE_PASSWORD` 
- `NEXT_PUBLIC_SESSION_DURATION`

**So setzt du sie in Vercel:**
1. Gehe zu deinem Vercel Dashboard
2. Wähle dein ResponsumOS Projekt
3. Gehe zu "Settings" → "Environment Variables"
4. Füge jede Variable hinzu:
   - **Name:** `NEXT_PUBLIC_MAINTENANCE_USERNAME`
   - **Value:** Dein gewünschter Benutzername
   - **Environment:** Production (und Preview falls gewünscht)
5. Wiederhole für `NEXT_PUBLIC_MAINTENANCE_PASSWORD` und `NEXT_PUBLIC_SESSION_DURATION`
6. Klicke "Save"
7. Redeploy deine Anwendung

### 3. Sichere Passwörter
Verwende starke Passwörter:
- Mindestens 12 Zeichen
- Groß- und Kleinbuchstaben
- Zahlen und Sonderzeichen
- Keine Wörter aus dem Wörterbuch

## 🔒 Zusätzliche Sicherheitsmaßnahmen

### 1. Server-seitige Validierung
Für echte Sicherheit solltest du eine server-seitige API für die Authentifizierung implementieren.

### 2. HTTPS verwenden
Stelle sicher, dass deine Website über HTTPS läuft.

### 3. Rate Limiting
Implementiere Rate Limiting für Login-Versuche.

### 4. Session-Management
Die aktuelle Implementierung verwendet localStorage. Für bessere Sicherheit solltest du HTTP-Only Cookies verwenden.

## 📝 Verwendung

1. **Wartungsmodus aktiv:** Standardmäßig sichtbar
2. **Login:** Verwende die Zugangsdaten (sollten in Produktion geändert werden)
3. **Vollständige Website:** Nach erfolgreichem Login verfügbar
4. **Logout:** Über den "Abmelden" Button

## ⚠️ Wichtige Hinweise

- Die aktuellen Zugangsdaten sind **NICHT sicher** für die Produktion
- Ändere die Zugangsdaten vor dem Deployment
- Verwende starke Passwörter
- Überwache Login-Versuche
- Implementiere zusätzliche Sicherheitsmaßnahmen für kritische Anwendungen

## 🛠️ Entwicklung

```bash
# Entwicklungsserver starten
npm run dev

# Website ist unter http://localhost:3001 verfügbar (Port 3000 war belegt)
# Wartungsseite wird standardmäßig angezeigt
```

## 📋 Checkliste für Production Deployment

- [ ] `.env.local` mit sicheren Zugangsdaten erstellt
- [ ] Vercel Umgebungsvariablen gesetzt:
  - [ ] `NEXT_PUBLIC_MAINTENANCE_USERNAME`
  - [ ] `NEXT_PUBLIC_MAINTENANCE_PASSWORD`
  - [ ] `NEXT_PUBLIC_SESSION_DURATION`
- [ ] Vercel Deployment durchgeführt
- [ ] Login mit neuen Zugangsdaten getestet
