const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const less = require('less');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
const merge = require('webpack-merge');

const rootPath = path.resolve(__dirname, '../');
const config = require('./configs/webpack');
const configs = [
	{
		output: {
			filename: '[name].min.js',
			libraryTarget: 'umd',
			library: 'TradeshiftReactComponents'
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
		}
	},
	{
		output: {
			filename: '[name].js',
			libraryTarget: 'commonjs2'
		},
		externals: [nodeExternals()],
		optimization: {
			minimize: false
		}
	}
];

let index = 0;

function buildJS() {
	if (index < configs.length) {
		const v = merge({}, config, configs[index]);
		webpack(v, (err, stats) => {
			if (err) {
				console.error(err);
			}
			console.log(
				stats.toString({
					colors: true
				})
			);
			index++;
			buildJS();
		});
	}
}

function buildCSS() {
	const stylePath = path.join(rootPath, 'src/style/index.less');
	const style = fs.readFileSync(stylePath, 'utf8');

	less
		.render(style, {
			filename: stylePath
		})
		.then(({ css }) =>
			postcssrc().then(({ plugins, options }) => postcss(plugins).process(css, options))
		)
		.then(({ css }) => {
			fs.writeFileSync(path.join(rootPath, 'dist/react-components.css'), css, 'utf8');
		});
}

fs.mkdirSync(path.join(rootPath, 'dist'));

buildJS();

buildCSS();
