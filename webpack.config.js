const path = require('path');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const PATHS = {
  build: path.join(__dirname, 'build'),
  dist: path.join(__dirname, 'dist'),
  docs: path.join(__dirname, 'stories'),
  src: path.join(__dirname, 'src'),
};

const extractTextPluginConfig = new ExtractTextPlugin('prestige.css');

const copyWebpackPluginConfig = new CopyWebpackPlugin([
  {
    from: 'src/style/',
    to: 'scss/style',
  },
  {
    from: 'src/components/',
    to: 'scss/components',
    ignore: ['**/*.js', '**/*.snap'],
  },
]);

const baseConfig = {
  devServer: {
    disableHostCheck: true,
  },
  output: {
    filename: 'prestige.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [PATHS.src, PATHS.docs],
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        include: [PATHS.src, PATHS.docs],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
        }),
      },
    ],
  },
  plugins: [extractTextPluginConfig],
};

const distConfig = {
  entry: PATHS.src,
  output: {
    path: PATHS.dist,
    library: 'Prestige',
    libraryTarget: 'umd',
  },
  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react',
      },
    },
    {
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom',
      },
    },
  ],
  plugins: [copyWebpackPluginConfig],
};

module.exports = function config(env) {
  if (env === 'dist') {
    return webpackMerge(baseConfig, distConfig);
  }
  return baseConfig;
};
