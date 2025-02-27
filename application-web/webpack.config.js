const path = require('path');

module.exports = {
  mode: 'production', // ou 'development'
  entry: './app/public/index.js', // Apenas código front-end
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'app/public'),
  },
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "url": require.resolve("url/"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert/"),
      "buffer": require.resolve("buffer/"),
      "vm": require.resolve("vm-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "util": require.resolve("util/"),
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
  ],
};
