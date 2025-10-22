import type { NextConfig } from "next";

const createNextConfig = (config: NextConfig = {}): NextConfig => {
  return {
    // Base configuration
    reactCompiler: true,

    // Merge with user config
    ...config,

    // Override or add shared settings
    experimental: {
      ...config.experimental,
    },

    // Shared webpack config if needed (only if webpack is being used)
    ...(config.webpack && {
      webpack: (webpackConfig, context) => {
        // Apply any shared webpack modifications here

        // Call user webpack function if provided
        if (typeof config.webpack === 'function') {
          return config.webpack(webpackConfig, context);
        }

        return webpackConfig;
      },
    }),

    // Empty turbopack config to explicitly acknowledge turbopack usage
    turbopack: config.turbopack || {},
  };
};

export default createNextConfig;
