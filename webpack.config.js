const path = require('path');
const webpack = require("webpack");
const { name, version } = require("./package.json");

const banner = `${name}@v${version}`;

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader'],
        sideEffects: true,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new webpack.BannerPlugin(banner)],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.svg', '.css', '.json'],
  },
};
