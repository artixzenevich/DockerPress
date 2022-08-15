const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require("terser-webpack-plugin");

const styleHandler = MiniCssExtractPlugin.loader

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'assets'),
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/dist')
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  
  watch: true,

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
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
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  }
}