module.exports = {
  preset: 'react-native',
  // testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/src/?(*.)+(spec).[jt]s?(x)'],
  setupFiles: ['<rootDir>/jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@?react-native' + '|@react-native-community' + ')',
  ],
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/filemock.js',
  },
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
};
