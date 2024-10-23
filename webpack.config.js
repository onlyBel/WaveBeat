const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    server: 'http',
    host: 'localhost',
    port: 3001, //change to an available port
    static: {
      directory: path.join(__dirname, 'dist')
    },
    hot: true,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

