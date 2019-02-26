const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  entry: {main: ['@babel/polyfill', './server/server.js']},
  plugins: [
    new CleanWebpackPlugin(['build'])
  ],
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread']
          }
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  }
};


// {
//   "name": "news",
//   "version": "1.0.0",
//   "description": "",
//   "main": "server/server.js",
//   "scripts": {
//     "clean": "rm -rf build && mkdir build",
//     "build-babel": "babel -d ./build ./server -s",
//     "build": "npm run clean && npm run build-babel",
//     "start": "npm run build && node ./build/server.js",
//     "test": "export NODE_ENV=test && nodemon --exec 'mocha */tests/**.test.js --require @babel/polyfill --require @babel/register'",
//     "graph": "export NODE_ENV=graph && nodemon --exec babel-node server/graph.js ",
//     "build-server": "babel server/server.js -d dist",
//     "server": "nodemon --exec babel-node server/server.js ",
//     "debug": "babel-node --inspect-brk server/server.js",
//     "repl": "babel-node server/repl.js"
//   },
