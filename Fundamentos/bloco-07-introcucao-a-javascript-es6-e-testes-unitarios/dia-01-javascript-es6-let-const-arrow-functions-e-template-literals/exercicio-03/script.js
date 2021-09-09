// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.


let resultado = numero => {
    let resultado2 = 1
    for (i = 1; i <= numero; i+=1) {
        resultado2 *= i
    }
    console.log(resultado2)
} 
resultado(4);

