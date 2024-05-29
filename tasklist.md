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
    * `npm install` - install the dependencies to make binaries
    * `npm run sea-blob` - make the blob that will be injected
    * `npm run cp-node` - copy the node binary (node.exe)
    * `npm run axe-sig` - remove node.exe signature (req. signtool.exe)
    * `npm run sea-inject` - inject the blob into the exe
    * `npm test` - run the standalone executable
    * `cd ..` - return to top directory
8. Run Ex5: 
    * `cd .\ex5` - switch the the Ex5 directory
    * `npm install --include=dev` - install the dependencies for webpack
    * `npm run webpack` - webpack your hello.js fine and all dependencies
    * Run .\ex5\dist\index.html in Chrome and watch debugger break in

[a]: https://nodejs.org/en/learn/getting-started/how-to-install-nodejs
[b]: https://github.com/octokit/octokit.js?tab=readme-ov-file#usage
