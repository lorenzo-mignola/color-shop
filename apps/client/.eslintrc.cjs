const eslintPreset = require('config/eslint-preset');

module.exports = {
  ...eslintPreset,
  extends: [...eslintPreset.extends, 'prettier'],
  plugins: ['svelte3', ...eslintPreset.plugins],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte']
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  },
  rules: {
    ...eslintPreset.rules
  }
};
