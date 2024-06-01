// Template: https://stackoverflow.com/a/75191830/4634229

import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.js'], // Check all JS files
    languageOptions: {
      ecmaVersion: 14, // Check using ES14 rules
      globals: globals.node, // Use global settings for NodeJS
    },
    rules: {
      'no-unused-vars': 'warn', // Unused variables demoted to warning instead of error
      'no-debugger': 'warn', // Debugger demoted to warning instead of error
      semi: 'warn', // Warn if a semi is missing
    },
  },
];
