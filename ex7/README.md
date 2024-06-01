# Example 7; Prettier and Promises

Similar to ESLint, this example introduces [prettier][a] which is a coding style beautifier. You define exactly what JavaScript coding style you want to enforce and `prettier` will make sure all code is "pretty". Unlike ESLint, `prettier` will go ahead and make the code changes for you, since they are generally low-risk. It will also highlight syntax errors if any are encountered when its run.

[Promises][b] on the other hand are one of the fundamental JavaScript synchronization primitive. Newer JavaScript uses [async/await][c], but `promises` are still used extensively in many books, samples and libraries you may encounter. They are also important to understand how torturously asynchronous JavaScript is.

## Samples provided

- **Example 7a** - This is the most readable promise example with no anonymous functions
- **Example 7b** - Makes all functions anonymous but holds all in variables
- **Example 7c** - Makes all anonymous functions embedded as arguments when referenced
- **Example 7d** - Makes all embedded anonymous functions use the new arrow format
- **hello.js** - Our standard sample here, rewritten as a promise

## Walkthrough

To run through these examples, after reviewing the source, perform the following:

    npm install --prefix .. --include=dev

This installs all the packages listed in `packages.json` including the development dependencies. This will install the modules in the parent directory simply to keep from duplicated all the downloads.

    npm run pretty

Run prettier on the current source. If you find any files in need of modification, perform `npm run pretty:commit`.

    npm run lint

Run ESLint to check for logical or syntactic errors. You'll need to modify the files in error as ESLint does not offer to make the changes.

    node ex7a.js
    node ex7b.js
    node ex7c.js
    node ex7d.js
    node hello.js

Run examples a-d and `hello.js`

    npm test

This will run `hello.js` as a module testing both `hello.js` and `package.json`.

## NPM scripts

The `package.json` file has the following `scripts` entry. You can run these with the command `npm run ...` or `npm test ...` for each of those targets.

- **test** - import and export test
- **pretty** - check source for poor style
- **pretty:commit** - commit pretty suggestions to the file
- **lint** - run the lint static code analysis tool

[a]: https://prettier.io/
[b]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
[c]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
