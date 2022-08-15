const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const styleHandler = MiniCssExtractPlugin.loader

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'assets'),
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'assets/dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.bundle.css'
    })
  ],
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'assets/src'),
        use: [
          styleHandler,
          'css-loader', 
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  require('tailwindcss'),
                  require('autoprefixer'),
                ]
              }
            }
          }
        ],
      },
    ],
  }
}