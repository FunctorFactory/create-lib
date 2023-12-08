import { pathsToModuleNameMapper } from 'ts-jest';
import type { JestConfigWithTsJest } from 'ts-jest';

import { compilerOptions as baseCompilerOptions } from './tsconfig.base.json';
import { compilerOptions as testCompilerOptions } from './tsconfig.test.json';
import { MapLike } from 'typescript';

const compilerOptions = {
  ...baseCompilerOptions,
  ...testCompilerOptions,
};

const getPaths = (options: unknown): MapLike<string[]> => {
  if (
    typeof options === 'object' &&
    options !== null &&
    'paths' in options &&
    typeof options.paths === 'object' &&
    options.paths !== null
  ) {
    return options.paths as { [key: string]: string[] };
  }
  return {};
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
  moduleNameMapper: pathsToModuleNameMapper(getPaths(compilerOptions), {
    prefix: '<rootDir>/',
  })!,
};

export default jestConfig;
