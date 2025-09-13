//Capitalizes the first letter of each word by identifying word boundaries. Useful for formatting titles or names.

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let word of words) {
    let capitalized = word[0].toUpperCase() + word.slice(1);
    result.push(capitalized);
  }

  return result.join(" ");
}

console.log(capitalizeWords("hello world from manjinder"));
// Output: "Hello World From Manjinder"
