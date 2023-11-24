import config from "@functorfactory/eslint-config";
import effect from '@effect/eslint-plugin';

export default [
  ...config,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.test.json'],
      },
    },
  },
];
