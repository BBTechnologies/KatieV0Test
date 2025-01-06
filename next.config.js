module.exports = {
  webpack(config) {
    config.resolve.extensions.push('.scss');
    return config;
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api']
  }
};
