// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
  
  let str = "arara"
  function palindromo() {
      if(str === str.split("").reverse().join("")){
          return true;
      } else {
          return false;
      }
  }
    console.log(palindromo())

//2. - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let arrayTeste = [2, 3, 6, 7, 10, 1];
function maior (){
    let resultado = 0
    for(index = 0; index < arrayTeste.length; index +=1){
        if(arrayTeste[index] > resultado) {
        resultado = index
        }
    }
    return resultado;
}

console.log(maior())

// 3 . Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let arrayTeste = [2, 4, 6, 7, 10, 0, -3];
function menor (){
    let resultado = 0
    for(index = 0; index < arrayTeste.length; index +=1){
        if(arrayTeste[index] < resultado) {
        resultado = index
        }
    }
    return resultado;
}

console.log(menor())

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let resultado = ""
function nomes() {
for(index = 0; index < arrayTeste.length; index+=1){
    if(arrayTeste[index].length > resultado.length) {
        resultado = arrayTeste[index]
    }
}
return resultado;
}
console.log(nomes())

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
let arrayTeste = [2, 3, 2, 5, 8, 2, 3];
function inteiros(){

} 

// 7 . Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
let resultado = true
function comparacao (word, ending){
    if(word.length > ending.length && word.split("")
    } else {
        return resultado = false;
    }
}
console.log(comparacao("trybe", "be"))