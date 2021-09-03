const assert = require('assert');
const removeVowels = (word) => {
    let characters = word.split('');
    let results = [];
  
    for (let index = 0; index < characters.length; index += 1) {
      if (characters[index] === 'a'){
            results.push(1)
    }else if (characters[index] === 'e' ) {
        results.push(3)
    } else if (characters[index] === 'i' ) {
        results.push(2)
    } else if (characters[index] === 'o' ) {
        results.push(4)
    } else if (characters[index] === 'u' ) {
        results.push(5)
    } else {
        results.push(characters[index])
    }
}
return results.join("");
};

  
  const parameter = 'Dayane';
  const result = 'D1y2n3';

assert.strictEqual(removeVowels(parameter), result, "algo deu errado")