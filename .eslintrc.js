/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ['eslint:recommended', 'prettier', 'turbo'],
  plugins: ['only-warn', '@typescript-eslint'],
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [
    // Ignore dotfiles
    '.*.js',
    'node_modules/',
    'dist/',
    'tsup.config.ts',
    'vitest.config.ts',
  ],
  overrides: [
    {
      files: ['*.js?(x)', '*.ts?(x)'],
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  rules: {
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        varsIgnorePattern: '^_',
      },
    ],
    'no-redeclare': 'off',
    'require-await': 'off',
    '@typescript-eslint/require-await': 'error',
  },
};
