module.exports = {
  collectCoverageFrom: ['src/components/**/*.js'],
  coveragePathIgnorePatterns: ['/node_modules', '__vrts__'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  // setupFiles: ['./src/__setupTests.js'],
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
