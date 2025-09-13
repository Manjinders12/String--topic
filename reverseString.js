//Reverses a string by iterating from the end to the beginning and constructing a new reversed string. Useful for palindromes or data manipulation.

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("learn a string concept"));

// output: "tpecnoc gnirts a nrael";
