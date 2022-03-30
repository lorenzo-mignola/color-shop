/* eslint-disable import/no-extraneous-dependencies */
const eslintPreset = require('config/eslint-preset');

module.exports = {
  ...eslintPreset,
  root: true,
  extends: [
    ...eslintPreset.extends,
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier'
  ],
  plugins: ['svelte3', ...eslintPreset.plugins, 'prettier'],
  ignorePatterns: ['*.cjs'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    ...eslintPreset.settings,
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
    ...eslintPreset.rules,
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': 'off'
  }
};
