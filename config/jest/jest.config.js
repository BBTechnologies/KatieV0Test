// Ensure time zone consistency across test environments
process.env.TZ = 'UTC';

module.exports = {
  rootDir: '../../', // Adjusted to point to the project root

  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports',
  coverageReporters: ['json', 'html'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/config/jest/jestMocks/generic.mock.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest/jestMocks/generic.mock.js'
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.js'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  }
};
