module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
    node: true,
    mocha: true,
    'jest/globals': true,
  },
  plugins: ['jest'],
  extends: 'eslint:recommended',
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: [2, 'single'],
    semi: 2,
  },
};
