//Manually calculates the length of a string by iterating through each character. Useful for understanding string traversal.

function getLength(str) {
  let count = 0;
  for (let char of str) {
    count++;
  }
  return count;
}
console.log(getLength("manjinder"));
console.log(getLength("JavaScript"));

// output:9
// output:10
