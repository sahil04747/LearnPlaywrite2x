// const BASE_URL = "https://api.example.com/data";

// BASE_URL = "https://api.anotherexample.com/data"; // This will throw an error because BASE_URL is a constant
// TypeError: Assignment to constant variable.

let name = "pending";
name = "done";
{
  let name = "Dutta";
}

function say() {
  let name = "Dutta";
}
say();
say();
