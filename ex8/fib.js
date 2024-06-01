// Node v22 using MJS;  A Fibonacci implementation in WebAssembly
// node .\ex8\fibs.js
// node inspect .\ex8\fibs.js   // goto "chrome://inspect" URL in a chrome browser
//                              // or type "cont" at debug prompt

// Assume add.wasm file exists that contains a single function
import fs from 'node:fs';

const wasmBuffer = fs.readFileSync('fib.wasm');
const wasmModule = await WebAssembly.instantiate(wasmBuffer);
const { fib } = wasmModule.instance.exports;
debugger;

const hhg = fib(42);
// https://www.calculatorsoup.com/calculators/discretemathematics/fibonacci-calculator.php
console.log(hhg); // Outputs: 267914296
