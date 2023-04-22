/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
   },
   images: {
      domains: ["localhost", "fakestoreapi.com"],
   },
}

module.exports = nextConfig
