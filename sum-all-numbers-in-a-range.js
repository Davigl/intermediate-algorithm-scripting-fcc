/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus
the sum of all the numbers between them. The lowest number will not always come first.
*/

function sumAll(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let sum = 0;

  for (; min <= max; min += 1) {
    sum += min;
  }

  return sum;
}

sumAll([1, 4]);
