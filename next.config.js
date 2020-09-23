const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
const withPWA = require('next-pwa')

//const {	nextI18NextRewrites} = require('next-i18next/rewrites')

const localeSubpaths = {}


module.exports = withPWA(withCSS(withSass({

	devIndicators: {
		autoPrerender: false,
	},
	pwa: {
		dest: 'public',
		disable: process.env.NODE_ENV === 'development'
	},
	distDir: 'build',
	assetPrefix: process.env.NEXT_BASE_PATH || '',
	trailingSlash: true,
	//exportTrailingSlash:true,
	exportPathMap: function() {
		return {
			'/': {
				page: '/'
			}
		};
	},
	publicRuntimeConfig: {
		localeSubpaths: process.env.LOCALE_SUBPATHS === 'true',
	},
	pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
	//rewrites: async () => nextI18NextRewrites(localeSubpaths),
	webpack(config, options) {
		config.module.rules.push({
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			use: {
				loader: 'url-loader',
				options: {
					limit: 100000
				}
			}
		});

		return config;
	}
})));

