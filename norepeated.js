//Finds the first non-repeating character in a string by comparing the first and last index of each character. Useful for identifying unique elements.

function firstUniqueChar(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }
  return null;
}

console.log(firstUniqueChar("aabbcdd"));
console.log(firstUniqueChar("manjinder"));
console.log(firstUniqueChar("swiss"));
//output:c
//output:m
//output:w
