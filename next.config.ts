import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    // Wir typisieren rule hier explizit als any
    config.module?.rules?.forEach((rule: any) => {
      if (!("oneOf" in rule) || !Array.isArray(rule.oneOf)) return;

      rule.oneOf.forEach((r: any) => {
        if (
          r.use &&
          Array.isArray(r.use) &&
          r.use.some((u: any) => u.loader?.includes("css-loader"))
        ) {
          r.use.forEach((u: any) => {
            if (u.loader?.includes("css-loader")) {
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
