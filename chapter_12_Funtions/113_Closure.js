function outer() {
  let msg = "Hii";
  console.log("Outer called");

  function inner() {
    console.log(msg);
  }

  return inner;
}

let result = outer();
result();

//---------------------------------------

function outer() {
  let message = "hello";
  console.log("Outer CALLED!");
  function inner() {
    console.log(message);
  }
  return inner;
}

let fn_inner = outer();
fn_inner();

// inner(); // ReferenceError: inner is not defined
