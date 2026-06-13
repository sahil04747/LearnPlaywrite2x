// ============================================
// 26. All Number Types in JavaScript
// ============================================

// JavaScript has ONE Number type (based on IEEE 754 double-precision 64-bit).
// It can represent integers, floats, special values, and BigInt.

// --------------------------------------------
// 1. Integer Literals
// --------------------------------------------

// Decimal (base 10) - most common
let decimal = 42;
console.log(decimal);            // 42

// Hexadecimal (base 16) - starts with 0x or 0X
let hex = 0xFF;
console.log(hex);              // 255

// Octal (base 8) - starts with 0o or 0O
let octal = 0o77;
console.log(octal);            // 63

// Binary (base 2) - starts with 0b or 0B
let binary = 0b1010;
console.log(binary);           // 10


// --------------------------------------------
// 2. Floating Point (Decimal) Literals
// --------------------------------------------

let float1 = 3.14;
let float2 = .5;               // leading zero is optional
let float3 = 2.0;              // still a number (not integer strictly)

console.log(float1);           // 3.14
console.log(float2);           // 0.5
console.log(float3);           // 2


// --------------------------------------------
// 3. Exponential Notation
// --------------------------------------------

let exp1 = 1e5;                // 1 * 10^5 = 100000
let exp2 = 2.5e-3;             // 2.5 * 10^-3 = 0.0025
let exp3 = 1.6e+4;             // 1.6 * 10^4 = 16000

console.log(exp1);             // 100000
console.log(exp2);             // 0.0025
console.log(exp3);             // 16000


// --------------------------------------------
// 4. Special Number Values
// --------------------------------------------

// Infinity: positive infinity
let posInfinity = Infinity;
console.log(posInfinity);      // Infinity
console.log(1 / 0);            // Infinity

// -Infinity: negative infinity
let negInfinity = -Infinity;
console.log(negInfinity);      // -Infinity
console.log(-1 / 0);           // -Infinity

// NaN: "Not a Number" - result of invalid math
let notANumber = NaN;
console.log(notANumber);       // NaN
console.log(0 / 0);            // NaN
console.log("hello" * 2);      // NaN


// --------------------------------------------
// 5. BigInt (ES2020) - for very large integers
// --------------------------------------------

// BigInt is created by adding 'n' at the end of an integer
let big = 123456789012345678901234567890n;
console.log(big);              // 123456789012345678901234567890n
console.log(typeof big);       // "bigint"

// BigInt can also be created with BigInt()
let bigFromNumber = BigInt(9007199254740991);
console.log(bigFromNumber);    // 9007199254740991n

// Note: BigInt and Number cannot mix in arithmetic
// let mixed = 10n + 5; // This will throw TypeError


// --------------------------------------------
// Summary
// --------------------------------------------
// JavaScript Numbers include:
// - Integers (decimal, hex, octal, binary)
// - Floats (3.14, .5)
// - Exponential (1e5, 2.5e-3)
// - Special (Infinity, -Infinity, NaN)
// - BigInt (123n) - separate type, but still numeric

console.log("All Number types demonstrated!");
