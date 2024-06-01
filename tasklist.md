# Tasklist

From a powershell prompt

1. [Install node][a] version 22 `.\script\install-node-22.ps1`
2. Upgrade NPM to 10.8.0 `npm install -g npm@10.8.0`
3. [Install octikit][b] from NPM `npm install octokit`
4. Run Ex1 `node .\ex1\hello.mjs`
5. Run Ex2 `node .\ex2\hello.js`
6. Run Ex3 `node .\ex3\hello.js`
7. Run Ex4:
    * `cd .\ex4` - switch to the Ex4 directory
    * `npm install --prefix ..` - install the dependencies to make binaries
    * `npm run sea-blob` - make the blob that will be injected
    * `npm run cp-node` - copy the node binary (node.exe)
    * `npm run axe-sig` - remove node.exe signature (req. signtool.exe)
    * `npm run sea-inject` - inject the blob into the exe
    * `npm test` - run the standalone executable
    * `cd ..` - return to top directory
8. Run Ex5: 
    * `cd .\ex5` - switch the the Ex5 directory
    * `npm install --prefix .. --include=dev` - install the dependencies for webpack
    * `npm run webpack` - webpack your hello.js fine and all dependencies
    * Run .\ex5\dist\index.html in Chrome and watch debugger break in
9. Run Ex6:
    * The case for Semis: https://stackoverflow.com/questions/537632
    * `cd .\ex6` - switch the the Ex5 directory
    * `npm install --prefix .. --include=dev` - install the dependencies for eslint
    * `npm run eslint` - ask eslint to grade your code
    * `npm test` - run your code after making eslint recommendations
10. Ex7: Promises
    * Spec: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
11. Ex8: WASM / ActiveScript    
    * ChatGPT: https://chatgpt.com/share/912f39ff-102e-40b7-b79a-818a6c190d85
    * Fibbonachi: https://www.assemblyscript.org/introduction.html#from-a-webassembly-perspective 
    * How to Load: https://nodejs.org/en/learn/getting-started/nodejs-with-webassembly
    * AssemblyScript: https://www.assemblyscript.org/getting-started.html#setting-up-a-new-project
    

## Training

* JavaScript 2020 ed: https://books.google.com/books?id=OPbkDwAAQBAJ
* HTTP Protocol: https://www.udacity.com/course/http-web-servers--ud303
* Intro to JavaScript: https://www.udacity.com/course/intro-to-javascript--ud803
* Javascript Objects: https://www.udacity.com/course/object-oriented-javascript--ud711
* Javascript Promises: https://www.udacity.com/course/javascript-promises--ud898

[a]: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs
[b]: https://github.com/octokit/octokit.js?tab=readme-ov-file#usage
