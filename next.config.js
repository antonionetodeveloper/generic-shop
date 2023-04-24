/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
   },
   images: {
      domains: ["localhost", "files.stripe.com"],
   },
}

module.exports = nextConfig
