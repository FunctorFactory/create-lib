import config from '@functorfactory/eslint-config';

export default [
  ...config,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.test.json'],
      },
    },
  },
];
