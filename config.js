// config.js

const config = {
  // Server configuration
  server: {
    port: process.env.PORT || 3000,
    database: {
      host: 'localhost',
      port: 27017,
      name: 'nexusnudge',
    },
  },

  // Machine learning configuration
  ml: {
    library: 'tensorflow',
    version: '3.0.0',
  },

  // Frontend configuration
  frontend: {
    framework: 'react',
    version: '17.0.2',
  },
};

module.exports = config;
