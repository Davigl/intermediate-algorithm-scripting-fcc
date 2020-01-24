/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  let startVowel = /^[aeiou]/i;
  let globalVowels = /[aeiou]/gi;

  if (startVowel.test(str)) {
    str = str.concat("way");
  } else if (globalVowels.test(str)) {
    for (let i = 0; i < str.length - 1; i++) {
      if (!(startVowel.test(str))) {
        str = str.slice(1, str.length).concat(str.charAt(0));
      } else {
        break;
      }
    }

    str = str.concat("ay");
  } else {
    str = str.concat("ay");
  }

  return str;
}

console.log(translatePigLatin("glove"));
