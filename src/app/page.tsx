export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">
          Willkommen bei <span className="text-blue-400">ResponsumOS</span>
        </h1>
        <p className="text-lg text-gray-300">
          Dein System für Klarheit und Struktur.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-white">
          Starte jetzt
        </button>
      </div>
    </main>
  );
}
