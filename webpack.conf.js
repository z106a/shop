const SimpleProgressPlugin = require('webpack-simple-progress-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

const DEV = process.env.NODE_ENV !== 'production';
const {
  resolve,
} = require('path');

const PATH_SRC = resolve(`${__dirname}/src`);

module.exports = {
  resolve: {
    alias: {
      '': resolve(__dirname, './src/'),
      'react-dom': '@hot-loader/react-dom',
    },
  },
  entry: {
    app: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      `${PATH_SRC}/index.js`,
    ],
  },
  plugins: DEV ? [
    new SimpleProgressPlugin(),
    new HardSourceWebpackPlugin(),
  ] : [],
  devServer: {
    hot: true,
    inline: false,
    proxy: {
      '/websocket': {
        ws: true,
        target: 'ws://localhost:8080/',
        logLevel: 'debug',
        changeOrigin: true,
      },
    },
  },
};
