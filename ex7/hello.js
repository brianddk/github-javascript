// Node v22 using MJS;  Added actual use of Octokit and debugger
// node .\ex5\hello.js
// node inspect .\ex3\hello.js  // goto "chrome://inspect" URL in a chrome browser
//                              // or type "cont" at debug prompt

import { Octokit } from 'octokit';

// Octokit.js
// https://github.com/octokit/octokit.js?tab=readme-ov-file#octokit-api-client
// https://github.com/octokit/request.js?tab=readme-ov-file#request
new Octokit({})
  .request('GET /users/{username}', {
    username: 'brianddk',
    headers: { 'X-GitHub-Api-Version': '2022-11-28' },
  })
  .then((user) => {
    console.log('Hello, %s', JSON.stringify(user.data, null, 2));
    // https://nodejs.org/dist/latest/docs/api/debugger.html
    debugger;
  });

console.log('All Done!... standby for the Promise to unwind');