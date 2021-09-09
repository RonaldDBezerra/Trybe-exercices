// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

let resultado = () => {
oddsAndEvens.sort((a,b) => a - b);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`)
}

resultado()