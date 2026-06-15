let statusCode = 200;

if (statusCode === 201) {
  console.log("Request was successful.");
} else if (statusCode === 404) {
  console.log("Request failed.");
} else {
  console.log("Unknown status code.");
}
