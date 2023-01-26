const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const styleHandler = MiniCssExtractPlugin.loader

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './'),
  entry: './assets/src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './assets/dist')
  },

  devtool: 'source-map',

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
        include: path.resolve(__dirname, './assets/src'),
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
    new BrowserSyncPlugin({
      port: 8000,
      notify: true,
      proxy: 'localhost:5000',
      files: [
        '../_sd/**/*.php',
        '../_sd/assets/src/**.*'
      ],
      watchEvents: ["change", "add"],
      ghostMode: false, // disable sync between devices
    },
      {
        reload: false,
        injectCss: true,
      }),
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
