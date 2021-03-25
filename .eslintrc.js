module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		// "plugin:import/errors",
		// "plugin:import/warnings",
		"plugin:react-hooks/recommended",
	],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		parser: "babel-eslint",
		ecmaVersion: 11,
		sourceType: "module",
	},
	plugins: ["react", "react-hooks"],
	rules: {
		"react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
		"react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
		"no-extra-boolean-cast": "off",
	},
	parser: "babel-eslint",
};
