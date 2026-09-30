/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  allowedDevOrigins: ["192.168.15.7"],
  devIndicators: false,
};

module.exports = nextConfig;
