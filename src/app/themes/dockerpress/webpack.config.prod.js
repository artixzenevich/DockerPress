const path = require('path')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, 'assets'),
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'assets/dist')
  },
  watch: true,
  module: {

  
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'assets/src'),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  }

}