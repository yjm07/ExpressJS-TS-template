import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testEnvironmentOptions: {
    NODE_ENV: 'test',
  },
  testMatch: ['**/tests/*.test.ts'],
  restoreMocks: true,
  coveragePathIgnorePatterns: ['node_modules', 'tests'],
};

export default config;
