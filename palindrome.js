//Checks if a string is a palindrome by cleaning it (removing non-alphanumeric characters and ignoring case) and comparing it to its reverse. Useful for text validation.
function isPalindrome(str) {
  let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
console.log(isPalindrome("R")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("racecar")); // true

// output: true,false,true
