module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'react-app',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier', 'relay'],
  rules: {
    'prettier/prettier': 'warn',
  },
};
