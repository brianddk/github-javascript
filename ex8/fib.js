// Assume add.wasm file exists that contains a single function
import fs from 'node:fs';

const wasmBuffer = fs.readFileSync('fib.wasm');
const wasmModule = await WebAssembly.instantiate(wasmBuffer);
const { fib } = wasmModule.instance.exports;
debugger;

const hhg = fib(42);
// https://www.calculatorsoup.com/calculators/discretemathematics/fibonacci-calculator.php
console.log(hhg); // Outputs: 267914296
