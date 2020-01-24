/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

const filterArray = (arr, arr2) => {
  let newArray = arr.filter((value) => {
    if (arr2.indexOf(value) < 0) return value;
  });

  return newArray;
}

function diffArray(arr1, arr2) {
  var newArr = [...filterArray(arr2, arr1), ...filterArray(arr1, arr2)];

  return newArr;
}

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
