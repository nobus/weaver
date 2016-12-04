'use strict';

const path = require('path');
const webpack = require('webpack');
const combineLoaders = require('webpack-combine-loaders');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../public', 'static'),
    publicPath: '/static/'
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
          name: 'static/media/[name].[hash:8].[ext]'
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
        loader: combineLoaders([
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      }
    ]
  },
  postcss: function() {
    return [
      require('postcss-cssnext')
    ]
  }
};
