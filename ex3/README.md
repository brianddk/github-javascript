# Example 3; Debugger

This example expands `hello.js` to actually make calls into the `octokit` library. The main operation here is a "request" using the "GET" method on the "/user/..." path object. This is all low-level fundamentals of the [HTTP protocol][b]. Reviewing the HTTP protocol for concepts of "GET", "POST", "PATCH", and "DELETE" will be useful in understanding much of the Octokit library.

The next major addition to `hello.js` is the interaction with the [NodeJS Debugger][a]. The node debugger (inspect) actually allows interaction from many different debug hosts, though the simplest is the console's "debug>" prompt. The next simplest debug host is in the Chrome browser. Just open a browser and enter the url `chrome://inspect`.

Our final addition is to `package.json`. The main additions are the `main` and `exports` fields in package.json which allow this module to be imported by others. Review the [package.json spec][c] for more information on the fields in the file and how they are used.

## Samples provided

- **package.json** - Expanded package.json file allowing hello.js to act as a full module
- **hello.js** - First calls into OctoKit library, with debugger as an exercise

## Walkthrough

To run through these examples, after reviewing the source, perform the following:

    npm install --prefix ..

This installs all the packages listed in `packages.json`. This will install the modules in the parent directory simply to keep from duplicated all the downloads.

    node inspect hello.js

This will load the NodeJS console debugger. Technically `node inspect ...` allows debug connections, which can come from the console, browser, or a number of debug "hosts". Another interesting debug host is the chrome web-browser. You can actually debug NodeJS code in a Chrome browser by going to the URL `chrome:\\inspect` from any chrome browser instance running on the same machine as `node inspect ...`

    npm test

This target will create a temporary file that will load `hello.js` as a module using ECMAScript Module conventions (ESM / EJS). This tests that our `package.json` is correct and that our module performs the desired functions. The additions in the `package.json` file that make this work are `main` and `exports`.

## NPM scripts

The `package.json` file has the following `scripts` entry. You can run these with the command `npm run ...` or `npm test ...` for each of those targets.

- **test** - runs basic module import / load of our `hello.js` sample

[a]: https://nodejs.org/dist/latest/docs/api/debugger.html
[b]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#requests
[c]: https://docs.npmjs.com/cli/v10/configuring-npm/package-json
