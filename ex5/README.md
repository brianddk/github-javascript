# Example 5; WebPack

[WebPack][a] is a static JavaScript bundler to transpile a collection of dependent NodeJS project files, into a monolithic BrowserJS bundle. This will take our working NodeJS sample and bundle it to run in the Chrome browser. Note in the WebPack configuration file that changing mode from `development` to `production` will adjust the size of the bundled javascript. The process is called "minification" where whitespace is removed and variable names are shortened.

## Samples provided

- **webpack.config.cjs** - WebPack configuration parameters
- **hello.js** - Our standard sample here which we will bundle with WebPack

## Walkthrough

To run through these examples, after reviewing the source, perform the following:

    npm install --prefix .. --include=dev

This installs all the packages listed in `packages.json` including the development dependencies. This will install the modules in the parent directory simply to keep from duplicated all the downloads.

    npm run webpack

Run run the JavaScript bundler to bundle your NodeJS modules into BrowserJS files.

    npm run chrome

This will run the the BrowserJS code in a CORS-free browser. CORs is a form of web security that will break most test code that fetches data remotely.

    npm test

This will run `hello.js` as a module testing both `hello.js` and `package.json`.

## NPM scripts

The `package.json` file has the following `scripts` entry. You can run these with the command `npm run ...` or `npm test ...` for each of those targets.

- **test** - import and export test
- **webpack** - use webpack to transpile NodeJS modules to a BrowserJS bundle
- **chrome** - run a CORs-free chrome instance loading your BrowserJS bundle

[a]: https://webpack.js.org/concepts/
