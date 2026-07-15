/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Local SVG assets (stack schematics, partner logos) go through next/image.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'www.plan-systems.org',
      },
    ],
  },
  async redirects() {
    // Legacy layer name: OASIS became AZOA.
    return [
      {
        source: '/oasis',
        destination: '/azoa',
        permanent: true,
      },
    ];
  },
  typescript: {
    // Set this to false if you want production builds to abort if there are type errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // Set this to false if you want production builds to abort if there are lint errors
    ignoreDuringBuilds: true,
  },
}

export default nextConfig;
