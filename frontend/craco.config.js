const path = require('path');

module.exports = {
    webpack: {
      alias: {
        '@src': path.resolve(__dirname, 'src'),
        '@redux': path.resolve(__dirname, 'src/redux'),
        '@utility': path.resolve(__dirname, 'src/utility'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@layouts': path.resolve(__dirname, 'src/@core/layouts'),
        '@styles': path.resolve(__dirname, 'src/@core/scss'),
        '@configs': path.resolve(__dirname, 'src/configs'),
        '@constants': path.resolve(__dirname, 'src/constants'),
      },
    },
  }