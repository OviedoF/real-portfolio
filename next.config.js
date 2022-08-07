/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com']
  },
  env: {
    USER: process.env.USER,
    PASS: process.env.PASS,
    HOSTNAME: process.env.HOSTNAME
  }
}

module.exports = nextConfig
