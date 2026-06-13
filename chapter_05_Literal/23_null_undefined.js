// ============================================
// 23. null vs undefined in JavaScript
// ============================================

// --------------------------------------------
// undefined
// --------------------------------------------
// "undefined" means a variable has been declared,
// but it has NOT been assigned a value yet.
// It is the default "empty" value of JavaScript.

let myName;
console.log(myName);           // undefined
console.log(typeof myName);    // "undefined"

// A function that does not return anything gives undefined
function sayHello() {
    console.log("Hello!");
}
let result = sayHello();
console.log(result);           // undefined

// An object property that does not exist gives undefined
let person = { name: "Sahil" };
console.log(person.age);       // undefined


// --------------------------------------------
// null
// --------------------------------------------
// "null" is an assignment value that means
// "no value" or "empty" on PURPOSE.
// It is something YOU (the developer) set to say
// "this is intentionally empty".

let myCar = null;
console.log(myCar);            // null
console.log(typeof myCar);     // "object"  (this is a known JS bug)

// Example: clearing a value intentionally
let user = "Sahil";
user = null;                   // developer says: "no user now"
console.log(user);             // null


// --------------------------------------------
// Simple Comparison
// --------------------------------------------
console.log(null == undefined);   // true  (both are "empty-ish")
console.log(null === undefined);  // false (different types)

// Summary:
// undefined -> JavaScript says "I don't have a value"
// null        -> Developer says "I choose to have no value"
