// postcss.config.cjs
if (process.env.SANITY_STUDIO) {
  module.exports = { plugins: [] };
  return;
}

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
