//Replaces all occurrences of a target word with a replacement word using a case-insensitive regex. Useful for text manipulation tasks.

function replaceWord(str, target, replacement) {
  let regex = new RegExp(target, "gi"); // 'g' for global, 'i' for case-insensitive
  let updated = str.replace(regex, replacement);
  return updated;
}

let sentence = "JS is cool. JS is powerful.";
console.log(replaceWord(sentence, "JS", "JavaScript"));

// Output: "JavaScript is cool. JavaScript is powerful."
