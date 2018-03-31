module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          'webpack.config.js',
          'postcss.config.js',
          'stories/**/*.js',
          '**/*.test.js',
        ],
      },
    ],
    'jsx-a11y/label-has-for': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/require-default-props': 'off',
  },
};
