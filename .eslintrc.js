/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['../eslint-config/react.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/*.{spec,test}.{j,t}s?(x)'],
    },
  ],
};
