/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
*/


function sumFibs(num) {
  var previousNumber = 0;
  var currentNumber = 1;
  var output = 0;

  while (currentNumber <= num) {
    if (currentNumber % 2 !== 0) {
      output += currentNumber;
    }

    currentNumber += previousNumber;
    previousNumber = currentNumber - previousNumber;
  }

  return output;
}

sumFibs(4);
