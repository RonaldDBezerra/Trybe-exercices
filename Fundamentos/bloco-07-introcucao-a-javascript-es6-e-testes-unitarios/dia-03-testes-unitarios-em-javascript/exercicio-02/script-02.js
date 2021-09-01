const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(param) {
    resultado = [];
    for (i = 0; i < param.length; i+=1) {
        resultado.push(param[i].length)
    }
    return resultado;
}
console.log(wordLengths(['sun', 'potato', 'roundabout', 'pizza']))
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);