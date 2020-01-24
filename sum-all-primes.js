/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and
itself. For example, 2 is a prime number because it is only divisible by 1 and 2.

In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
*/

const isPrime = number => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i === 0) return false;
  }

  return number > 1;
};

function sumPrimes(num) {
  let result = 0;

  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      result += i;
    }
  }

  return result;
}

sumPrimes(10);
