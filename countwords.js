//Trims extra spaces and splits the string by whitespace to count words accurately. Helps in text parsing tasks.

function countWords(str) {
  let trimmed = str.trim(); // remove leading/trailing spaces
  let words = trimmed.split(/\s+/); // split by one or more spaces
  return words.length;
}

let input = "React is a library ";
console.log(countWords(input));

// output: 4
