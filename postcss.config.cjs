// postcss.config.cjs

// Wenn SANITY_STUDIO=1 gesetzt ist, liefere eine No-Op-Config für Vite/Sanity:
if (process.env.SANITY_STUDIO) {
  module.exports = { plugins: [] };
  return;
}

// Ansonsten (Next.js) benutze Tailwind + Autoprefixer:
module.exports = {
  plugins: [
    ['tailwindcss', {}],
    ['autoprefixer', {}],
  ],
};
