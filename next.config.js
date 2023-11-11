/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ["cdn.sanity.io"]
  },
  async redirects() {
    return [
      {
        source: "/category",
        destination: "/",
        permanent: false
      },
      {
        source: "/author",
        destination: "/",
        permanent: false
      },
      {
        source: "/post",
        destination: "/",
        permanent: false
      },
      {
        source: "/page",
        destination: "/",
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
