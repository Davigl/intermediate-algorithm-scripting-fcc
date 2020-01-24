/*
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array that are of
the same value as these arguments.

Note
You have to use the arguments object.
*/

const destroy = (arr, number) => {
  arr = arr.filter(value => {
    if (number !== value) return value;
  });

  return arr;
};

function destroyer(arr) {
  let keys = Object.keys(arguments);

  for (let i = 1; i < keys.length; i++) {
    arr = destroy(arr, arguments[i]);
  }

  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
