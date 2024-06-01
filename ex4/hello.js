// Node v22 using CJS;  Needed Closure to call MJS from CJS
//
// This example shows how to make a binary, with lots of use of package.json
// npm install               // install the dependencies to make binaries
// npm run clean             // optional: remove files from previous runs
// npm run sea-blob          // make the blob that will be injected
// npm run cp-node           // copy the node binary (node.exe)
// npm run axe-sig           // remove node.exe signature
// npm run sea-inject        // inject the blob into the exe
// npm run build             // perform all the above steps in one go
// npm test                  // run the standalone executable

// Closure: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
const main = async function () {
  // In CJS, await can only be called from an async scope, hence the enclosure
  // Since octokit is MJS, to call from CJS, must use await
  const { Octokit, App } = await import('octokit');

  // Octokit.js
  // https://github.com/octokit/octokit.js?tab=readme-ov-file#octokit-api-client
  const octokit = new Octokit({});

  // https://github.com/octokit/request.js?tab=readme-ov-file#request
  const user = await octokit.request('GET /users/{username}', {
    username: 'brianddk',
    headers: { 'X-GitHub-Api-Version': '2022-11-28' },
  });

  // https://nodejs.org/dist/latest/docs/api/debugger.html
  debugger;

  console.log('Hello, %s', user.data);
};

main();
