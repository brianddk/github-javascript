# Example 8; WebAssembly / ActiveScript

This example covers [WebAssembly][a], which is compiled bytecode that can run in the browser WASM engine, very similar to the browsers JavaScript engine. Most all browsers nowadays support WebAssembly, as does NodeJS. Although developers can right raw WebAssembly (.wat), that is very uncommon. Most use a highlevel language to compile into WebAssembly. Compliers exist for [Java][b], [Python][c], [C++][d], and many more. But the default high-level language that the WASM runtime is tested against is called [AssemblyScript][e]. AssemblyScript is a typing extension of [TypeScript][f] which is itself a typing extension of Javascript. This pedigree makes AssemblyScript very comfortable and comprehendible for JavaScript developers.

This example writes a [Fibonacci][e] calculator in AssemblyScript (`fib.ts`) that is loaded and called by `fib.js` using the [NodeJS WebAssembly engine][g]. The AssemblyScript compiler (`asc`) is used to convert AssemblyScript source code into a WabAssembly binary (`fib.wasm`). Note that the filesize of the `wasm` file is smaller than the source `ts` file. This is useful since one of the main bottlenecks for WebApps is actually internet speed. So reducing the download size is a big deal. Large WebAssembly projects are generally smaller and faster than their comparable JavaScript implementations. But for very small things, the added startup time to bring WASM into memory is generally not worth it.

If you look at many of the WebAssembly compilers, you may realize that most of them will compile to either WebAssembly or minified JavaScript. Minified JavaScript is a very common practice of converting JavaScript (or other language) into the smallest possible legal JavaScript textfile. The minification removes all whitespace, comments and generally shortens variables to one character names. When given the option `development` generally produces the least minified code, and `production` generally produces the most minified code.

## Walkthrough

To run through these examples, after reviewing the source, perform the following:

    npm install --prefix .. --include=dev

This installs all the packages listed in `packages.json` including the development dependencies. This will install the modules in the parent directory simply to keep from duplicated all the downloads.

    npm run pretty

Run prettier on the current source. If you find any files in need of modification, perform `npm run pretty:commit`.

    npm run lint

Run ESLint to check for logical or syntactic errors. You'll need to modify the files in error as ESLint does not offer to make the changes.

    # Optional
    npm asinit

Will create an AssemblyScript project directory. Not needed for this small example, but useful for larger ones

    npm asbuild

Run Wasm compiler to convert `fib.ts` to `fib.wasm`

    npm test

This will run `fib.js` as a module testing both `fib.js` and `package.json`.

## NPM scripts

The `package.json` file has the following `scripts` entry. You can run these with the command `npm run ...` or `npm test ...` for each of those targets.

- **test** - import and export test
- **pretty** - check source for poor style
- **pretty:commit** - commit pretty suggestions to the file
- **lint** - run the lint static code analysis tool
- **asinit** - recreate all the AssemblyScript infrastructure files
- **asbuild** - build the WebAssembly (.wasm) file

[a]: https://webassembly.org/getting-started/developers-guide/
[b]: https://www.teavm.org/
[c]: https://wasmer.io/posts/py2wasm-a-python-to-wasm-compiler
[d]: https://emscripten.org/index.html
[e]: https://www.assemblyscript.org/introduction.html#from-a-webassembly-perspective
[f]: https://www.typescriptlang.org/docs/handbook/intro.html
[g]: https://nodejs.org/en/learn/getting-started/nodejs-with-webassembly
