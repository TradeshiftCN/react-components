const path = require('path');
const rimraf = require('rimraf');
const webpack = require('webpack');
const Uglify = require('uglifyjs-webpack-plugin');
const sourcePath = path.resolve(__dirname, '../src');
const outputPath = path.resolve(__dirname, '../dist');
const entryName = 'react-components';

rimraf.sync(outputPath);

const config = {
  entry: {},
  output: {
    path: outputPath,
    publicPath: '../',
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: 'babel-loader',
        include: sourcePath
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader?minimize=true',
          'postcss-loader?config.path=config/postcss.config.js',
          'less-loader?javascriptEnabled=true'
        ],
        include: sourcePath
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader?config.path=config/postcss.config.js'
        ],
        include: sourcePath
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: ['url-loader']
      }
    ]
  },
  resolve: {
    alias: {
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
      prefixCls: JSON.stringify('ts-rc')
    }),
    new Uglify({
      uglifyOptions: {
        compress: {
          properties: false
        }
      }
    })
  ]
};

config.entry[entryName] = [`${sourcePath}/components/index.js`];

module.exports = config;
