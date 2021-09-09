const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui

const myRemove = myRemoveWithoutCopy([1, 2, 3, 4], 3)
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), myRemove, "não é o esperado")

assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4], "não é o esperado")

const test = [1, 2, 3, 4]
myRemoveWithoutCopy(test, 3)
assert.deepStrictEqual(test, [1, 2, 3, 4], "não é o esperado")

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], "não é o esperado")
