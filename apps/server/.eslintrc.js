const eslintPreset = require('config/eslint-preset');

module.exports = {
  ...eslintPreset,
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module'
  },
  rules: {
    ...eslintPreset.rules,
    'class-methods-use-this': 'off'
  }
};
