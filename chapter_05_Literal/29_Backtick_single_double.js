// ============================================
// 29. Single vs Double vs Backtick Quotes
// ============================================

// Single (') and Double (") quotes are the SAME in JS.
// Just pick one style and be consistent.

let name1 = 'Sahil';
let name2 = "Sahil";

// Backtick (`) is the SPECIAL one. It supports string interpolation (variables inside the string).

let age = 25;
let message = `My name is ${name1} and I am ${age} years old.`;
console.log(message);

// Summary:
// ' ' and " " -> same, plain text
// ` `         -> allows variables inside ${...}
