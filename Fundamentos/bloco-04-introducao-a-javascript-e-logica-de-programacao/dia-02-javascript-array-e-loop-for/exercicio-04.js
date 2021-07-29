// exercicio 04
// . Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
for (let index = 0; index < numbers.length; index+=1) {
    console.log(numbers[index])
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = 0
for (let index = 0; index < numbers.length; index+=1) {
    soma = soma + numbers[index]
}

console.log(soma)

// 3 . Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array
let media = 0
let resultado = 0
for (let index = 0; index < numbers.length; index+=1) {
    media = media + numbers[index]
    if (index === numbers.length - 1) {
        resultado = media / numbers.length
        console.log(resultado)
    }
}

// 4 . Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
let media = 0
let resultado = 0
for (let index = 0; index < numbers.length; index+=1) {
    media = media + numbers[index]
    if (index === numbers.length - 1) {
        resultado = media / numbers.length
    }
}

if (resultado >= 20) {
    console.log("Maior que 20")
} else {
    console.log("Menor que 20")
}

// 5 . Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = 0
for (index = 1; index < numbers.length; index+=1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index]
    }
}
console.log(maiorNumero)

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let valoresImpares = []
for (index = 0; index < numbers.length; index+=1) {
    if (numbers[index] % 2 !== 0) {
        valoresImpares.push(numbers[index])
    }
}

console.log(valoresImpares)

// 7. Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorNumero = numbers[0]
for (index = 0; index < numbers.length; index+=1) {
    if (numbers[index] < menorNumero) {
        menorNumero = numbers[index]
    }
}
console.log(menorNumero)

// 8.  Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
numeros = []
for (index = 1; index <= 25; index+=1) {
    numeros.push(index)
}
console.log(numeros)

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

numeros = [1,  2,  3,  4,  5,  6,  7,  8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]

for (index = 0; index < numeros.length; index+=1) {
    console.log(numeros[index] / 2)
}