'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '../public', 'static'),
    publicPath: '/static/',
    filename: 'js/bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    loaders: [
      {
        exclude: [
          /\.html$/,
          /\.(js|jsx)$/,
          /\.css$/,
          /\.json$/
        ],
        loader: 'url',
        query: {
          limit: 10000,
          name: 'media/[name].[hash:8].[ext]'
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          'presets': ['es2015', 'stage-0', 'react'],
          'plugins': [
            'transform-es2015-spread',
            'transform-decorators-legacy',
            'transform-object-rest-spread'
          ]
        },
        include: [
          path.join(__dirname, '../src')
        ]
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
