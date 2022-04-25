module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'indent': 'tab',
		'import/prefer-default-export': 'off',
		'import/extensions': 'off',
		'linebreak-style': 'off',
		'no-unused-vars': 'off',
	},
};
