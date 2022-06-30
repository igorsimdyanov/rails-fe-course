process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const webpack = require('webpack');
const environment = require('./environment')
const webpackConfig = environment.toWebpackConfig()
webpackConfig.module = {
  rules: [
    {
      test: /\.svg/,
      use: [
        "file-loader"
      ]
    }
  ]
}
// webpackConfig.plugins = [
//   ...webpackConfig.plugins,
//   new webpack.ProgressPlugin()
// ]

module.exports = environment.toWebpackConfig()
