/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  var regex = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  str = str.replace(regex, "-").toLowerCase();

  return str;
}

console.log(spinalCase('This Is Spinal Tap'));
