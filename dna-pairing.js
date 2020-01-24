/** 
The DNA strand is missing the pairing element. Take each character, get its pair,
and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.
*/

const search = (char, pairs) => {
  switch (char) {
    case "T":
      pairs.push(["T", "A"]);
      break;
    case "A":
      pairs.push(["A", "T"]);
      break;
    case "C":
      pairs.push(["C", "G"]);
      break;
    case "G":
      pairs.push(["G", "C"]);
      break;
  }
};

function pairElement(str) {
  var pairs = [];

  for (let i = 0; i < str.length; i++) {
    search(str[i], pairs);
  }

  return pairs;
}

pairElement("GCG");
