const assert = require('assert');
const { resourceUsage } = require('process');
// escreva a função sumAllNumbers aqui

function sumAllNumbers(param) {
  let resultado = 0
  for (i = 0; i < param.length; i+=1) {
      resultado = resultado + param[i]
  }
  return resultado
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);