//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

'use strict';

const webpack = require('webpack');

const mainReactRule = {
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ["@babel/preset-react", "@babel/preset-typescript"]
      }
    },
    {
      loader: 'ts-loader',
      options: {
        configFile: 'config/test/tsconfig.test.json'
      }
    }
  ]
}

const cssRule = {
  test: /\.css$/,
  use: [
    'style-loader',
    { loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1
      }
    },
    'postcss-loader'
  ]
}

const testReactRule = {
  test: /\.jsx$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ["@babel/preset-react"]
    }
  }
}

const istanbulRule = {
  test: /\.ts(x?)$/,
  exclude: [ /(.*\.d\.ts$)/, /node_modules/],
  enforce: 'post',
  use: {
    loader: 'istanbul-instrumenter-loader',
    options: {
      esModules: true
    }
  }
}

module.exports = {
  mode: 'development',
  module: {
    rules: [
      mainReactRule,
      cssRule,
      testReactRule,
      istanbulRule
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      test: /\.ts(x)?$/
    })
  ],
  watch: false
};
