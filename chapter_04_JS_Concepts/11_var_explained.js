var v = 25;

console.log(v); // Global scope

function hello() {
  console.log("Hello function");

  var v = 50; // Local scope
  console.log(v);
  if (true) {
    var v = 100; // Still local scope, var does not have block scope
    console.log(v);
  }
}

hello();
