const path = require('path');
const reactDocgen = require('react-docgen');
const reactDocgenTs = require('react-docgen-typescript');

const componentsPath = path.resolve(__dirname, 'styleguide/components');
const isTsRegex = /\.tsx?$/i;

module.exports = {
	// title: 'Tradeshift React Components',
	serverPort: process.env.PORT || 3003,
	webpackConfig: require('./styleguide/webpack.config'),
	usageMode: 'expand',
	pagePerSection: true,
	assetsDir: path.resolve(__dirname, 'styleguide/assets'),
	styleguideDir: 'styleguide-dist',
	sections: [
		{
			name: 'Get started',
			content: 'docs/start.md'
		},
		{
			name: 'Components',
			components: 'src/components/*/index.{js,jsx,ts,tsx}',
			sectionDepth: 2
		}
	],
	require: [path.resolve(__dirname, './src/style/index.less')],
	template: {
		favicon: 'favicon.ico',
		head: {
			links: [
				{
					href: 'ts.css',
					rel: 'stylesheet',
					type: 'text/css'
				}
			]
		}
	},
	theme: {
		color: {
			link: '#00b0ff',
			linkHover: '#00b0ff'
		}
	},
	styles: {
		ComponentsList: {
			list: {
				paddingLeft: '16px'
			},
			item: {
				lineHeight: '28px'
			},
			link: {
				display: 'block',
				transition: 'color 0.2s !important',
				'&, &:link, &:visited': {
					color: 'rgba(255,255,255,0.8) !important'
				},
				'&:hover, &:active': {
					color: '#fff !important'
				}
			}
		}
	},
	styleguideComponents: {
		Logo: path.join(componentsPath, 'Logo'),
		StyleGuideRenderer: path.join(componentsPath, 'StyleGuide'),
		ComponentsListRenderer: path.join(componentsPath, 'ComponentsList')
	},
	propsParser(filePath, source, resolver, handlers) {
		if (isTsRegex.test(filePath)) {
			return reactDocgenTs
				.withDefaultConfig('./tsconfig.json')
				.parse(filePath, source, resolver, handlers);
		} else {
			return reactDocgen.parse(source, resolver, handlers);
		}
	}
};
