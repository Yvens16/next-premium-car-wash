module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/generateSiteMap')
    }

    return config
  },
  images: {
    deviceSizes: [273, 322, 367, 500, 640, 750, 828, 900],
  },
}