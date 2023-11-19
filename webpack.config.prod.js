const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const styleHandler = MiniCssExtractPlugin.loader;

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, './'),
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './app/themes/starter/dist'),
  },

  resolve: {
    extensions: ['.js'], 
  },

  watch: true,

  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, './src'),
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
      filename: 'bundle.css',
    }),
  ],
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(), // Добавляем TerserPlugin для минимизации JS
    ],
  },
};