if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // output: 'export',
  // trailingSlash: true,
  
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // unoptimized : true,
    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      "0.gravatar.com",
      "1.gravatar.com",
      "2.gravatar.com",
      "secure.gravatar.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "21-pl.purpleparrotwebsites.com",
        port: "",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig)
