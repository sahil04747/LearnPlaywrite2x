function getUserStatus() {
  console.log(Status_code);
  var Status_code = "active";
  console.log(Status_code);
}

getUserStatus();

// Note: var is function-scoped, so status is hoisted to
// the top of getUserStatus(), NOT the global scope.
