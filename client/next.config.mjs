/** @type {import('next').NextConfig} */
import Critters from "critters";

const nextConfig = {
  /* config options here */
  swcMinify: true,
  reactStrictMode: true,

  reactCompiler: true,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 3600,
  },

  swcOptions: {
    jsc: {
      target: "es2022",
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  },

  // compiler: {
  //   reactCompiler: process.env.NODE_ENV === 'production', // Только в продакшене
  //   removeConsole: process.env.NODE_ENV === 'production', // Удалить console.log в продакшене
  // },

  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },

  turbopack: {},

  webpack: (config, { isServer, dev }) => {
    if (!dev && !isServer) {
      config.plugins.push(
        new Critters({
          preload: "swap",
          path: "./",
          publicPath: "/_next/",
          // Дополнительные опции:
          // external: true, // Внешние стили
          // inlineFonts: true, // Инлайнить шрифты
        })
      );
    }
    return config;
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
            priority: 10,
          },
          commons: {
            name: "commons",
            chunks: "all",
            minChunks: 2,
            priority: 5,
          },
        },
      };
    }
    return config;
  },

  async headers() {
    return [
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/image/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
      {
        source: "/site.webmanifest",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
