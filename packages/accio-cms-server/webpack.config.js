const {
  CheckerPlugin,
  TsConfigPathsPlugin,
} = require('awesome-typescript-loader')
const path = require('path')
const nodeExternals = require('webpack-node-externals')

const main = ['core-js', './src/index.ts']

module.exports = {
  mode: 'development',
  context: process.cwd(),
  devtool: 'inline-source-map',
  entry: main,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.graphql'],
    plugins: [
      new TsConfigPathsPlugin({
        configFileName: './tsconfig.json',
        useBabel: true,
        useCache: true,
        babelOptions: {
          babelrc: false,
          presets: [
            [
              '@babel/preset-env',
              { targets: 'last 2 versions, ie 11', modules: false },
            ],
          ],
        },
        babelCore: '@babel/core',
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: 'graphql-tag/loader',
      },
    ],
  },
  plugins: [new CheckerPlugin()],
  externals: [nodeExternals()],
}
