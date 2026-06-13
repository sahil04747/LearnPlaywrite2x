let x = "global";

if (true) {
  console.log(x);
  // ReferenceError: Cannot access 'x' before initialization
  // TDZ of x starts here, so it cannot be accessed before this line

  let x = "block";
  console.log(x); // block
}
