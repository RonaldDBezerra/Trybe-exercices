const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(15), "fizzbuzz", "algo errado")

assert.strictEqual(myFizzBuzz(6), "fizz", "algo de errado")

assert.strictEqual(myFizzBuzz(10), "buzz", "algo de errado")

assert.strictEqual(myFizzBuzz(7), 7, "algo de errado")

assert.strictEqual(myFizzBuzz("oi"), false, "algo de errado")