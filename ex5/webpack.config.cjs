const path = require('path')
const pkg = require('./package.json')

module.exports = {
  mode: 'development',  // development to keep source code, production to minify source code
  entry: pkg.main,      // steal "main" from package.json
  // steal "output" from package.json splitting directory (dirname) and file (basename)
  output: {
    filename: path.basename(pkg.output),
    path: path.resolve(__dirname, path.dirname(pkg.output)), // resolve to make FQDN
  },
};