/*
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
*/

function dropElements(arr, func) {
  let updatedArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      updatedArray = arr.slice(i, arr.length);
      break;
    }
  }

  return updatedArray;
}

console.log(dropElements([1, 2, 3, 4], function(n) {return n >= 3; }));
