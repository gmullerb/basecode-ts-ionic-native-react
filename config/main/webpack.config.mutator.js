//  Copyright (c) 2019 Gonzalo Müller Bravo.
//  Licensed under the MIT License (MIT), see LICENSE.txt

const reactRule = {
  test: /\.tsx$/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: ['@babel/preset-react', '@babel/preset-typescript']
    }
  }
}

const cssRule = {
  test: /\.css$/,
  use: [
    'style-loader',
    { loader: 'css-loader',
      options: {
        modules: true,
        importLoaders: 1,
        sourceMap: true
      }
    },
    'postcss-loader'
  ]
}

module.exports = (sourceWebpack) => {
  const filteredRules = sourceWebpack.module.rules.filter(
    (rule) => !(rule.test instanceof RegExp) || !rule.test.test('.css')
  )
  filteredRules.push(reactRule)
  filteredRules.push(cssRule)

  sourceWebpack.module.rules = filteredRules

  return sourceWebpack
}
