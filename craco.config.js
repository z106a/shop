const { POSTCSS_MODES } = require('@craco/craco');
const reactHotReloadPlugin = require('craco-plugin-react-hot-reload');
const webpackConf = require('./webpack.conf');

module.exports = function ({ env }) {
  return {
    webpack: webpackConf,
    style: {
      postcss: {
        mode: POSTCSS_MODES.file,
      },
    },
    plugins: [{
      plugin: reactHotReloadPlugin,
    }],
  };
};
