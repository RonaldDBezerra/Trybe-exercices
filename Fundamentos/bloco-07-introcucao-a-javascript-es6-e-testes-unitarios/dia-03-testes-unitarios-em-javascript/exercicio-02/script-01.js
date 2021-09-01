const assert = require('assert');
// escreva a função addOne aqui

function addOne(param) {
    resultado = []
    for (i = 0; i < param.length; i+=1) {
        resultado.push(param[i] + 1)
    }
    return resultado
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);