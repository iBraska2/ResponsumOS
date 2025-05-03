import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Gehe alle rule.oneOf-Blöcke durch…
    config.module.rules.forEach((rule) => {
      if (!("oneOf" in rule) || !Array.isArray(rule.oneOf)) return;

      rule.oneOf.forEach((r: any) => {
        // Suche nach dem css-loader
        if (
          r.use &&
          Array.isArray(r.use) &&
          r.use.some((u: any) =>
            u.loader?.includes("css-loader")
          )
        ) {
          r.use.forEach((u: any) => {
            if (u.loader?.includes("css-loader")) {
              // Setze nur hier esModule auf false
              u.options = {
                ...u.options,
                esModule: false,
              };
            }
          });
        }
      });
    });

    return config;
  },
};

export default nextConfig;
