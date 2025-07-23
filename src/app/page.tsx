/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "next-sanity";

type Post = {
  _id: string;
  title: string;
  body: string;
  createdAt?: string;
  category?: string;
};

type SystemMetric = {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
};

// Sanity Client
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2025-05-03",
  useCdn: true,
});

export default async function Dashboard() {
  // Posts laden
  const posts = await sanityClient.fetch<Post[]>(`
    *[_type == "post"] | order(_createdAt desc)[0...6]{
      _id,
      title,
      body,
      _createdAt,
      category
    }
  `);

  // Mock System Metrics (in echten App würden diese von APIs kommen)
  const systemMetrics: SystemMetric[] = [
    { label: "Aktive Module", value: "24", change: "+3", trend: "up" },
    { label: "Verarbeitete Anfragen", value: "1,847", change: "+12%", trend: "up" },
    { label: "System Uptime", value: "99.8%", change: "0.0%", trend: "stable" },
    { label: "Antworten/Tag", value: "142", change: "+8%", trend: "up" },
  ];

  const quickActions = [
    { title: "Neues Modul", icon: "⚡", description: "System erweitern" },
    { title: "Analyse starten", icon: "📊", description: "Daten auswerten" },
    { title: "Backup erstellen", icon: "💾", description: "System sichern" },
    { title: "Einstellungen", icon: "⚙️", description: "System konfigurieren" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Responsum<span className="relative">
                  O
                  <span className="absolute inset-0 w-4 h-4 border-2 border-cyan-400 rounded-full opacity-60 transform translate-x-1 translate-y-1"></span>
                </span>S
              </h1>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM4 19h9" />
                </svg>
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                </svg>
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Dashboard
          </h2>
          <p className="text-gray-600">Ein System. Viele Antworten. Willkommen zurück.</p>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{metric.label}</p>
                  <p className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Fira Code', monospace" }}>
                    {metric.value}
                  </p>
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  metric.trend === 'up' ? 'text-green-600' :
                  metric.trend === 'down' ? 'text-red-600' : 'text-gray-500'
                }`}>
                  {metric.trend === 'up' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  )}
                  {metric.trend === 'down' && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  )}
                  <span className="font-medium">{metric.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Schnellaktionen</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="w-full flex items-center p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                    >
                      <span className="text-2xl mr-4">{action.icon}</span>
                      <div className="text-left">
                        <p className="font-medium text-gray-900 group-hover:text-blue-600">{action.title}</p>
                        <p className="text-sm text-gray-500">{action.description}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 mt-6">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">API Services</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-green-600">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Database</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-green-600">Online</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Backup System</span>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                      <span className="text-sm font-medium text-amber-600">Wartung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Posts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Aktuelle Beiträge</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Alle anzeigen →
                </button>
              </div>
              <div className="divide-y divide-gray-200">
                {posts.length === 0 ? (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Keine Beiträge gefunden</h4>
                    <p className="text-sm text-gray-500">Erstelle deinen ersten Beitrag, um loszulegen.</p>
                    <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      Beitrag erstellen
                    </button>
                  </div>
                ) : (
                  posts.map((post) => (
                    <div key={post._id} className="p-6 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                            {post.title}
                          </h4>
                          <p className="text-gray-600 mb-3 line-clamp-2">
                            {post.body.length > 150
                              ? `${post.body.substring(0, 150)}...`
                              : post.body}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            {post.category && (
                              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                                {post.category}
                              </span>
                            )}
                            {post.createdAt && (
                              <span>
                                {new Date(post.createdAt).toLocaleDateString('de-DE')}
                              </span>
                            )}
                          </div>
                        </div>
                        <button className="ml-4 p-2 text-gray-400 hover:text-gray-600 transition-colors">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}