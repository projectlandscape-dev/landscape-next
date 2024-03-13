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
  optimizeFonts : true,
  images: {
    // unoptimized : true,
    minimumCacheTTL: 31536000,
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
  compiler:{
    styledComponents: {
      ssr: true
    }
  },
};

module.exports = withBundleAnalyzer(nextConfig)
