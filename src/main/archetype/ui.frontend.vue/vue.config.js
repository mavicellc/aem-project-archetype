const WebpackAssetsManifest = require('webpack-assets-manifest')

module.exports = {
  configureWebpack: config => {
    config.plugins = config.plugins.concat(
      new WebpackAssetsManifest({
        output: 'asset-manifest.json'
      })
    )
  },
  devServer: {
    proxy: {
      '': {
        target: 'http://localhost:4502/',
        auth: 'admin:admin',
        changeOrigin: true
      }
    },
    clientLogLevel: 'info',
    watchOptions: {
      poll: true
    },
    writeToDisk: true
  }
}
