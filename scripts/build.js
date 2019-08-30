const fs = require('fs');
const path = require('path');

const glob = require('glob');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const less = require('less');
const postcss = require('postcss');
const postcssrc = require('postcss-load-config');
const merge = require('webpack-merge');

const rootPath = path.resolve(__dirname, '../');
const basicConfig = require('./configs/webpack');
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

async function buildJS() {
	let promise = Promise.resolve();
	configs.forEach(v => {
		const config = merge({}, basicConfig, v);
		promise = promise.then(() => {
			return new Promise(resolve => {
				webpack(config, (err, stats) => {
					if (err) {
						console.error(err);
					}
					console.log(
						stats.toString({
							colors: true
						})
					);
					resolve();
				});
			});
		});
	});
	return promise;
}

async function buildCSS() {
	const stylePath = path.join(rootPath, 'src/style/index.less');
	const style = fs.readFileSync(stylePath, 'utf8');

	return new Promise(resolve => {
		less
			.render(style, {
				filename: stylePath
			})
			.then(({ css }) =>
				postcssrc().then(({ plugins, options }) => postcss(plugins).process(css, options))
			)
			.then(({ css }) => {
				fs.writeFileSync(path.join(rootPath, 'dist/react-components.css'), css, 'utf8');
			})
			.then(resolve);
	});
}

function buildTypes() {
	const content = glob
		.sync(path.join(rootPath, 'types/components/*'))
		.filter(file => fs.lstatSync(file).isDirectory())
		.map(dir => {
			const name = path.parse(dir).name;
			return `export { default as ${name} } from './components/${name}';`;
		})
		.join('\n');

	fs.writeFileSync(path.join(rootPath, 'types/index.d.ts'), content, 'utf8');
}

(async () => {
	fs.mkdirSync(path.join(rootPath, 'dist'));
	await buildJS();
	await buildCSS();
	buildTypes();
})();
