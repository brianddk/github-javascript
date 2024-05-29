# github-javascript
Quick lesson on Javascript using Github

* Introduction to BrowserJS (Javascript): https://www.w3schools.com/js/default.asp
* Introduction to Node.js (Javascript): https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
* Node.js Standard Library Reference: https://nodejs.org/docs/latest/api/

# What is Javascript

Javascript is slang for the language specification [ECMAScript][a].  The language specification is a living specification and has a new release every year.  The "current" version of the language specification is [ES6 (ECMAScript-2015)][b], but NodeJS does support language features all the way up to ES14 / ES2023.  Obviously the year of release is not always the year of adoption.  It is very common to use something called "transpiling" to "compile" something like ES14 down to ES5 or ES6 javascript.  The idea of compiling javascript into different javascript is a very common theme throughout the language.

## Runtimes

NodeJS is a runtime that you can run javascript inside.  Other runtimes would be Chrome, FireFox, Safari.  The NodeJS features try to be very close to the Chrome runtime, also known as [V8 Engine][b].  Even though NodeJS uses the same engine as Chrome, you can run NodeJS inside Chrome directly.  You usually need to "transpile" your NodeJS code in to BrowserJS code.  The most common way to do this "bundling" is with a package called [Webpack][c]

## Extensions

Javascript, with the help of transpiliers has been extended to both higher and lower level langauges.  [Typescript][d] is a type extender for Javascript in the same way that C++ is a class extender for C.  The other common "extension" is called WebAssembly.  WebAssembly may better be described as a different engine used in various runtimes, but thinking of it as an extension may be a bit easier.  [WebAssembly][e] is a way to transpile / compile many different languanges into a type of assembly that the various runtimes can run natively.  Common highlevel languages to compile WebAssembly from are C/C++ and Rust.  Most Javascript runtimes provide a way to load and call WebAssembly binaries.

## Module Forms (CJS -vs- MJS)

Files in NodeJS are refered to as "modules".  The original form was called Common (CJS), and the new form is called ECMAScript (MJS).  They are similar, just with different module import / export rules

## Bundlers

Just as we mentioned bundlers to convert code for the NodeJS runtime into browser code for the V8-Chrome runtime, there are other bundlers as well.  NodeJS v22 supports the idea of [Single Executable Applications (SEA)][f].  This allows you to "compile" your NodeJS code into a standalone EXE file.

## Conclusion

Most common approach would be to [learn Javascript][g] in the NodeJS, then learn a bundler to transpile your NodeJS to BrowserJS.  I'd suggest you learn NodeJS v22, using the MJS module syntax, conforming to the ES14 language specification.  From there you can pickup the WebPack bundler to turn your NodeJS into BrowserJS and house in a website.  If Javascript becomes your new favorite language you can pick up a new middle language (C,C++, C#, Rust, Go) to use to [compile WebAssembly][e].

[a]: https://en.wikipedia.org/wiki/ECMAScript
[b]: https://v8.dev/
[c]: https://webpack.js.org/guides/getting-started/
[d]: https://www.typescriptlang.org/
[e]: https://webassembly.org/
[f]: https://nodejs.org/api/single-executable-applications.html
[g]: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
[e]: https://webassembly.org/getting-started/developers-guide/

[z]: https://www.sitepoint.com/webpack-beginner-guide/
