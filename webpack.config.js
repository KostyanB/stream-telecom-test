const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

const generateFilename = ext => isDev ?
    `[name].${ext}` :
    `[name].[contenthash].${ext}`;

module.exports = {
	entry: [
		'@babel/polyfill',
		'./index.js'
	],
	output: {
		filename: `${generateFilename('js')}`,
		path: path.resolve(__dirname, './build'),
		clean: true,
		environment: {
			arrowFunction: false,
		}
	},
	mode,
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
			minify: {
				collapseWhitespace: !isDev,
			}
		}),

		new CopyPlugin({
			patterns: [
				{ from: "./src/img", to: "img" },
				{ from: "./src/fonts", to: "fonts" },
				{ from: "./src/db", to: "db" },
			],
		}),
		new MiniCssExtractPlugin({
			filename: `${generateFilename('css')}`,
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						"presets": [
							[
								"@babel/preset-env",
								{
									"useBuiltIns": "usage",
									"corejs": {
										"version": "3.8",
										"proposals": true
									}
								}
							]
						]
					},
				},
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader?url=false']
			}
		]
	},
	optimization: {
		minimizer: [
			//   `...`,
			new CssMinimizerPlugin({
				test: /\.css$/i,
			}),
		],
	},
	performance: {
		maxEntrypointSize: 512000,
		maxAssetSize: 512000
	},
	devServer: {
		//contentBase: './build',
		open: true,
		port: 3000,
		hot: true,
		compress: true,
		overlay: true,
		writeToDisk: true,
		historyApiFallback: true,
		//stats: 'errors-only',
	},
	devtool: isDev && 'source-map',
};
