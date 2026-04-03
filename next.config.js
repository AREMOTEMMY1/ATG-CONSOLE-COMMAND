/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Protocol Zero Zero: Ensure no external indexing
  poweredByHeader: false,
}

module.exports = nextConfig
