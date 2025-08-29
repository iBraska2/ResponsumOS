'use client';

import { useState, useEffect } from 'react';
import { getAuthSession } from '../lib/auth';
import ResponsumOSLanding from '../components/ResponsumOSLanding';

const MainPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Prüfe beim Laden, ob bereits eingeloggt
  useEffect(() => {
    const session = getAuthSession();
    if (session && session.authenticated) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  // Loading-Zustand
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white font-bold text-2xl">R</span>
          </div>
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-gray-300 mt-4">Lade ResponsumOS...</p>
        </div>
      </div>
    );
  }

  // Wenn nicht authentifiziert, redirect zur Wartungsseite
  if (!isAuthenticated) {
    window.location.href = '/maintenance';
    return null;
  }

  // Wenn authentifiziert, zeige die ursprüngliche Website
  return <ResponsumOSLanding />;
};

export default MainPage;