const pt = require('path');

const webpackConfig = {
  resolve: {
    alias: {
      '@': pt.resolve(__dirname),
      '~': pt.resolve(__dirname, 'src'),
    },
  },
  plugins: [],
};

module.exports = webpackConfig;
