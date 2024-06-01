# Example 4; Single Execution Application (SEA)

This example covers the concept of a [Single Execution Application][a] (SEA), which is basically just an `.exe`. Many projects built on JavaScript or Python can grow to have hundreds of source files. This can be cumbersome to deploy and is often simpler just to deploy a single binary. Most interpretive languages allow the ability to deploy an `.exe`, and this is one of many ways to do it with JavaScript.

Since the SEA bundler in this example only supports CommonJS module syntax, this example will not use the ESM / EJS syntax presented earlier, but instead use CJS. This presents a bit of a problem since the OctoKit module included is a ESM module. To load an ESM module from a CJS module requires everything to be done inside a closure, which is why the import happens under `main()` instead of at the global file scope.

## Samples provided

- **package.json** - First really "complete" package.json file
- **hello.js** - Our standard sample here, but converted to CommonJS (CJS) conventions

## Walkthrough

To run through these examples, after reviewing the source, perform the following:

    npm install --prefix .. --include=dev

This installs all the packages listed in `packages.json` including the development dependencies. This will install the modules in the parent directory simply to keep from duplicated all the downloads.

    npm run sea-blob

Optional. Make the blob that will be injected into `node.exe` to produce the SEA binary. This process is similar to other bundling methods, where all dependencies are determined and bundled into a single object to execute. This step is automatically done with the `npm run build` target, but is still listed here to help debug in case there are any issues.

    npm run cp-node

Optional. Copy the `node.exe` binariy to `hello.exe`. This will be a template that we will use to build our SEA binary from. This step is automatically done with the `npm run build` target, but is still listed here to help debug in case there are any issues.

    npm run axe-sig

Optional. Since we are about to modify our template binary (`hello.exe`), our changes will make our digital signatures invalid. To prevent loader errors, we will use powershell to remove the binary signature. This step is automatically done with the `npm run build` target, but is still listed here to help debug in case there are any issues.

    npm run sea-inject

Optional. Now that we have the blob and the unsigned template binary, we simply inject one into the other which is what this target does. This step is automatically done with the `npm run build` target, but is still listed here to help debug in case there are any issues.

    npm run clean

Optional. If we make changes and need to rebuild, this target will remove the previous builds. This step is automatically done with the `npm run build` target, but is still listed here to help debug in case there are any issues.

    npm run build

This target performs all the other steps in one go. It removes previous builds, makes the blob, makes the template, strips the sigs and inserts the blob. Running this command will update your SEA binary from your JS source.

    npm test

Simply runs the SEA binary we created in the `build` target. Also serves as a simple test of `package.json`

## NPM scripts

The `package.json` file has the following `scripts` entry. You can run these with the command `npm run ...` or `npm test ...` for each of those targets.

- **sea-blob** - packages the javascript bytecode for injection
- **cp-node** - copies the node binary as a template binary
- **axe-sig** - removes the sig from the reference binary via powershell
- **sea-inject** - injects the bytecode into the reference binary
- **build** - perform all steps to build SEA from source
- **test** - runs the resultant executable to test if it worked

[a]: https://nodejs.org/api/single-executable-applications.html
