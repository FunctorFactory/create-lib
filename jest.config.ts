import { pathsToModuleNameMapper } from 'ts-jest';
import type { JestConfigWithTsJest } from 'ts-jest';

import { compilerOptions as baseCompilerOptions } from './tsconfig.base.json';
import { compilerOptions as testCompilerOptions } from './tsconfig.test.json';

const compilerOptions = {
  ...baseCompilerOptions,
  ...testCompilerOptions,
};

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.test.json',
      },
    ],
  },
  testEnvironment: 'node',
  testMatch: ['<rootDir>/test/**/*.ts'],
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
  })!,
};

export default jestConfig;
