/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/portofolio',
  assetPrefix: '/portofolio',
}

module.exports = nextConfig
