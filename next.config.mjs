/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {},
  ...(process.env.NODE_ENV === 'production'
    ? {}
    : {
        webpack: (config, { isServer }) => {
          if (!isServer) {
            config.optimization = {
              ...config.optimization,
              splitChunks: {
                ...config.optimization.splitChunks,
              },
            }
          }
          return config
        },
      }),
  onDemandEntries: {
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
}

export default nextConfig
