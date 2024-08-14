// next.config.js
const nextConfig = {
    // If you want to customize the asset prefix (optional)
    // assetPrefix: 'https://cdn.example.com',
  
    // Custom webpack configuration
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // Example: Remove query strings for CSS/JS files
        config.output.filename = 'static/js/[name].js';
        config.output.chunkFilename = 'static/js/[name].js';
  
        // Adjust the naming pattern for CSS files
        const cssLoader = config.module.rules.find(rule =>
          Array.isArray(rule.oneOf)
        ).oneOf.find(rule =>
          rule.test && rule.test.toString().includes('.css')
        );
  
        if (cssLoader) {
          const postcssLoader = cssLoader.use.find(
            loader => loader.loader.includes('postcss-loader')
          );
          if (postcssLoader) {
            postcssLoader.options = {
              ...postcssLoader.options,
              sourceMap: false, // Disable source maps if you want
            };
          }
        }
      }
      return config;
    },
  };
  
  module.exports = nextConfig;
  