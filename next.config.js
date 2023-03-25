/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'lh3.googleusercontent.com'],
    }
}

module.exports = nextConfig