const path = require('path');
const pkg = require('./package.json')

module.exports = {
  mode: 'development',
  entry: pkg.main,
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};