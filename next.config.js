/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['carlsbergfondet.dk', 'carlsbergfondet', 'https://carlsbergfondet.dk'],
    loader: "akamai",
  },
}

module.exports = nextConfig