/*
Create a function that sums two arguments together. 
If only one argument is provided, then return a function that expects one argument 
and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
*/

function addTogether() {
  const checkType = number => {
    if (typeof number === "number") {
      return true;
    } else return false;
  };

  if (arguments.length > 1) {
    let x = arguments[0];
    let y = arguments[1];

    if (checkType(x) && checkType(y)) return x + y;
  } else if (arguments.length === 1) {
    let z = arguments[0];

    if (checkType(arguments[0])) {
      return arg2 => {
        if (checkType(arg2)) return z + arg2;
      };
    }
  }
}

console.log(addTogether(2)(3));
