# Example 6; ESlint

This example covers the [ESlint][a] which is one of a class of tools called "linters" or Static Analysis Tools. Linters are similar to compilers but where compilers point out compilation errors that will prevent the compiler from producing code, linters grade code that can already compile without error. Linters will look for things like uninitialized variables being used, or variables assigned values that are never used. They are intended to find code that is syntactically correct, but done in poor form. Such code could generate problems when it is relied upon more heavily.

## Samples provided

- **eslint.config.js** - ESLint configuration parameters
- **hello.js** - Our standard sample here, with some items to flag in lint

## Walkthrough

To run through these examples, after reviewing the source, perform the following:

    npm install --prefix .. --include=dev

This installs all the packages listed in `packages.json` including the development dependencies. This will install the modules in the parent directory simply to keep from duplicated all the downloads.

    npm run lint

Run ESLint to check for logical or syntactic errors. You'll need to modify the files in error as ESLint does not offer to make the changes.

    npm test

This will run `hello.js` as a module testing both `hello.js` and `package.json`.

## NPM scripts

The `package.json` file has the following `scripts` entry. You can run these with the command `npm run ...` or `npm test ...` for each of those targets.

- **test** - import and export test
- **lint** - run the lint static code analysis tool

[a]: https://eslint.org/docs/latest/use/getting-started
