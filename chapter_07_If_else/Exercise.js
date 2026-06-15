// give the percentage of test cases passesd in ci build , report build health.

//100- Green build
//90-99- stable build
//70-89- unstable build
// below 70- broken build

let percentage = 85;

if (percentage >= 90 && percentage <= 100) {
  console.log("Green build");
} else if (percentage >= 70 && percentage < 90) {
  console.log("Unstable build");
} else if (percentage >= 0 && percentage < 70) {
  console.log("Broken build");
} else {
  console.log("Invalid percentage");
}
