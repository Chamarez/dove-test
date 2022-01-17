// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  transform: tsjPreset.transform,
  testEnvironment: 'node',
  watchPathIgnorePatterns: ['globalConfig'],
  setupFilesAfterEnv: [],
  coverageDirectory: './coverage',
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '.module.ts',
    '.config.ts',
    '.imports.ts',
    'main.ts',
    '.dto.ts',
    '.guard.ts',
    '.strategy.ts',
  ],
  coverageReporters: ['html', 'text', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
