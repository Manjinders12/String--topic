//Checks if the string contains only numeric characters using a regex pattern. Ideal for validating numeric input.

function isOnlyDigits(str) {
  let pattern = /^\d+$/;
  let result = pattern.test(str);
  return result;
}

console.log(isOnlyDigits("12345"));
console.log(isOnlyDigits("12a45"));
console.log(isOnlyDigits("67java90"));
console.log(isOnlyDigits("007"));

// output:true,false,false,true
