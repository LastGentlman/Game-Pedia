module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['standard', 'prettier', 'airbnb'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  ignorePatterns: ['*.spec.js'],
  rules: {
    'no-unused-vars': 'off',
    'n/no-path-concat': 'off',
    // "indent": ["warn", 4],
    // "react/jsx-indent": ["warn", 4, { "checkAttributes": true}],
    // "react/react-in-jsx-scope": "off",
    // "react/destructuring-assignment": "off",
    // "no-nested-ternary": "warn",
    // "react/prop-types": "warn"
  },
};