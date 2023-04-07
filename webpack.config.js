const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/scripts/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.bundle.js',
	},
	module: {
		rules: [
			{
				test: /.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
};
