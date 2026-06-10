console.log(greating);
var greating = "Hello World";
console.log(greating);

// Output: undefined
// Explanation: The variable 'greating' is hoisted to the top of its scope, but it is not initialized until the line where it is assigned the value "Hello World". Therefore, when console.log(greating) is executed, it outputs 'undefined' because the variable exists but has not been assigned a value yet.

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"
