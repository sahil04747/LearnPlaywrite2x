// Template Literals

let name = "Alice";
let greeting = `Hello, ${name}`;
console.log(greeting); // Output: Hello, Alice!

// real time example

let env = "staging";
env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`;
console.log(apiUrl);
