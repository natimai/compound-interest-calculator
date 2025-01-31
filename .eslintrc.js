module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    'react/no-unescaped-entities': 'off',
    '@next/next/no-img-element': 'off',
  },
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      presets: [require.resolve('next/babel')]
    }
  }
};