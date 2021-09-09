const assert = require('assert');
// escreva a função findTheNeedle aqui

function findTheNeedle(param1, param2){
    let resultado = 0
    for (i = 0; i < param1.length; i+=1) {
        if (param1[i] === param2) {
            return resultado = i
        } else {
            resultado = -1
        }
    }
    return resultado
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);