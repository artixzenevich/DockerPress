const { merge } = require('webpack-merge')
const TerserPlugin = require("terser-webpack-plugin");
const common = require('./webpack.config.dev.js')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts$/,
        enforce: 'pre',
        loader: 'ts-loader',
        options: {
          configFile: 'tsconfig.prod.json'
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin()
    ]
  }
});