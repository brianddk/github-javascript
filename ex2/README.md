# Example 2; EMCAScript Modules

This example sets the default module syntax convention to [EMCAScript Modules][a] (aka EJS / ESM) which is the current standard. This replaces the old standard of [Common.js Modules][b]. In simplest terms, EJS uses `import` while CJS uses `require`, but there is a bit more too it than that. The ways to force one convention or another is through either the `package.json` "type" or by forcing the file extension to either `*.cjs` or `*.mjs`.

## Samples provided

- **package.json** - Introduced `package.json` which has the "type" field to force EJS conventions
- **hello.js** - Still a stub with no real code yet

## Walkthrough

To run through these examples, after reviewing the source, perform the following:

    node hello.js

[a]: https://nodejs.org/api/esm.html#modules-ecmascript-modules
[b]: https://nodejs.org/api/modules.html#modules-commonjs-modules
