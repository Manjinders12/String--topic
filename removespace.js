//Removes all whitespace characters from a string using regex. Useful for data cleaning and formatting.

function removeSpaces(str) {
  let pattern = /\s+/g; // matches all whitespace characters
  let cleaned = str.replace(pattern, ""); // removes them
  return cleaned;
}

let input = "a  b  c";
let result = removeSpaces(input);
console.log(result);

// output: "abc"
