/*
Make a function that looks through an array of objects (first argument) and returns
an array of all objects that have matching name and value pairs (second argument). 

Each name and value pair of the source object has to be present in the object from 
the collection if it is to be included in the returned array.
*/

function whatIsInAName(collection, source) {
  var arr = [];
  var sourceKeys = Object.keys(source);

  for (var person in collection) {
    var haveAll = true;
    for (var key in sourceKeys) {
      if (collection[person][sourceKeys[key]] !== source[sourceKeys[key]]) {
        haveAll = false;
        break;
      }
    }

    if (haveAll) arr.push(collection[person]);
  }

  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);
