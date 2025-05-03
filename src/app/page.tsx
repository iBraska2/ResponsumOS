// src/app/page.tsx

import { createClient } from "next-sanity";

// 1) Sanity-Client direkt hier (nur für Testzwecke)
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // z.B. "7l3kj0fo"
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET!,    // z.B. "production"
  apiVersion:"2025-05-03",
  useCdn:     true,
});

export default async function Home() {
  // 2) Alle Posts laden
  const posts = await sanityClient.fetch(`
    *[_type == "post"]{
      _id,
      title,
      body
    }
  `);

  return (
    <>
      {/* Hero-Bereich (unverändert) */}
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-extrabold">
            Willkommen bei <span className="text-blue-400">ResponsumOS</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dein System für Klarheit und Struktur.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition">
            Starte jetzt
          </button>
        </div>
      </div>

      {/* Posts-Liste */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 border-b pb-2">Alle Posts</h2>

        {posts.length === 0 ? (
          <p className="text-gray-600 text-center">Keine Beiträge gefunden.</p>
        ) : (
          <ul className="space-y-8">
            {posts.map((post: any) => (
              <li
                key={post._id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
              >
                <div className="px-6 py-4">
                  <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-gray-700 leading-relaxed">
                    {post.body.length > 200
                      ? `${post.body.substring(0, 200)}…`
                      : post.body}
                  </p>
                </div>
                <div className="bg-gray-50 px-6 py-3 text-right">
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    Weiterlesen →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
