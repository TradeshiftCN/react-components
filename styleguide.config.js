const path = require('path');

const componentsPath = path.resolve(__dirname, 'styleguide/components');

module.exports = {
	title: 'Tradeshift React Components',
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
				lineHeight: '28px',
				'& > a': {
					display: 'block',
					cursor: 'pointer !important',
					transition: 'color 0.2s !important',
					'&, &:link, &:visited': {
						color: 'rgba(255,255,255,0.8)'
					},
					'&:hover, &:active': {
						color: '#fff'
					}
				}
			}
		},
		Code: {
			code: {
				margin: '0 1px',
				padding: '.2em .4em',
				background: '#f2f4f5',
				border: '1px solid #eee',
				borderRadius: 3
			}
		}
	},
	styleguideComponents: {
		Logo: path.join(componentsPath, 'Logo'),
		StyleGuideRenderer: path.join(componentsPath, 'StyleGuide')
	}
};
