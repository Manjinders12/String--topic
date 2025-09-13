//Uses a regular expression to find and count all vowels in a string, case-insensitively. Great for linguistic analysis.

function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

console.log(countVowels("JavaScript")); // 3
console.log(countVowels("HELLO")); // 2
console.log(countVowels("xyz")); // 0

// output: 3,2,0
