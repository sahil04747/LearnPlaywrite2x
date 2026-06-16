let responseCode = 504;

switch (responseCode) {
  case 200:
    console.log(" 200 :ok");
    break;
  case 404:
    console.log("404 : Not Found");
    break;
  case 500:
    console.log("500 : Internal Server Error");
    break;
  default:
    console.log("Unknown response code");
}
