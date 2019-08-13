const path = require('path');
const webpack = require('webpack');

const sourcePath = path.resolve(__dirname, 'src');
const version = require('./package.json').version;

module.exports = {
  mode: 'production',
  entry: { 'react-components': './src/components/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: sourcePath
      },
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
        include: sourcePath
      },
      { test: /\.less$/, use: ['css-loader', 'postcss-loader', 'less-loader'] },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@tradeshift/react-components': `${sourcePath}/components/index.js`,
      'ts-variables': `${sourcePath}/styles/ts-runtime.less`
    }
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom'
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types'
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(version)
    })
  ]
};
