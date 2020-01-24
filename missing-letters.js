/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  for (let i = 0; i < str.length - 1; i++) {
    let actualLetterCode = str.charCodeAt(i);
    let nextLetterCode = str.charCodeAt(i + 1);

    if (actualLetterCode + 1 != nextLetterCode) {
      return String.fromCharCode(actualLetterCode + 1);
    }
  }
}

console.log(fearNotLetter("abce"));
