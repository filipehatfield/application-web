const path = require('path');
const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: './app/public/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
  resolve: {
    fallback: {
      url: require.resolve('url/'),
      stream: require.resolve('stream-browserify'),
      buffer: require.resolve('buffer/'),
      crypto: require.resolve('crypto-browserify'),
      assert: require.resolve('assert/'),
      util: require.resolve('util/'),
      path: require.resolve('path-browserify'),
      process: require.resolve('process/browser')
    }
  },
  plugins: [
    new NodePolyfillPlugin(),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
