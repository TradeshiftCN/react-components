const plugins = [require('postcss-preset-env')()];
const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
	plugins.push(require('cssnano')());
}

module.exports = {
	plugins: plugins
};
