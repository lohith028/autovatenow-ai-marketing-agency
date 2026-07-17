/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
    ],
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;
