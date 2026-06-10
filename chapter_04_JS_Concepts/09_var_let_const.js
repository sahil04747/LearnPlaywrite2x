var v = 10;
let l = 20;
const c = 3.14;

var browser = "chrome";
var browser = "firefox"; // var allows redeclaration and reassigning
browser = "edge";

//for, function

var testcases = ["test1", "test2", "test3"];

for (var i = 0; i < testcases.length; i++) {
  console.log(testcases[i]);
}

console.log(i); // i is accessible outside the loop
