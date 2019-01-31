const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './main.js',
  output: {
    path: __dirname+'/dist/',
    chunkFilename: '[name].bundle.js',
    filename: 'mapbuilder.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(false)
    })
  ]
};