// exercicio-05
// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
let a = 1;
let b = 2;

// . Adição (a + b)
let Adição = a + b;

// . Subtração (a - b)
let Subtração = a - b;

// . Multiplicação (a * b)
let multiplicação = a * b;

// . Divisão (a / b)
let Divisão = a / b

// . Módulo (a % b)
let Módulo = a % b;

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
let number1 = 5
let number2 = 10

if (number1 > number2) {
    console.log(number1)
} else {
    console.log(number2)
}

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
let number1 = 5
let number2 = 10
let number3 = 15

if (number1 > number2 && number1 > number3) {
    console.log(number1)
} else if (number2 > number3 && number2 > number1) {
    console.log(number2)
} else {
    console.log(number3)
}

// 4. Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
let valor = "positivo"

switch (valor) {
    case ("positivo"):
        console.log ("positivo")
        break;
    case ("negativo") :
        console.log ("negativo")
        break;
    default :
        console.log("zero")
        break;
}

// 5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let lado1 = 60;
let lado2 = 60;
let lado3 = 60;

if (lado1 + lado2 + lado3 === 180) {
    console.log(true);
} else if (lado1 + lado2 + lado3 !== 180) {
    console.log (false)
} else {
    console.log (erro)
}

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz
let peça = "bispo"

if (peça === "rei") {
    console.log("Uma casa para qualquer lado")
} else if (peça === "rainha") {
    console.log("Diagonal; Reto; Lados")
} else if (peça === "bispo") {
    console.log("Diagonal") 
} else if (peça === "cavalo") {
    console.log("Movimento em sentido de L")
} else if (peça === "torre") {
    console.log("Reto")
} else if (peça === "peão") {
    console.log ("Uma casa ou duas para frente no primeiro movimento; Uma casa para frente no segundo movimento")
} else {
    console.log ("erro")
}

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// . Porcentagem >= 90 -> A
// . Porcentagem >= 80 -> B
// . Porcentagem >= 70 -> C
// . Porcentagem >= 60 -> D
// . Porcentagem >= 50 -> E
// . Porcentagem < 50 -> F
// . O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 101

if (nota >= 90 && nota <=100) {
    console.log("A")
} else if (nota >= 80 && nota < 90) {
    console.log ("B")
} else if (nota >= 70 && nota < 80 ) {
    console.log ("C")   
} else if (nota >= 60 && nota < 70) {
    console.log ("D")
} else if (nota >= 50 && nota < 60) {
    console.log("E")
} else if (nota < 50 && nota >= 0) {
    console.log("F")
} else {
    console.log ("erro")
}

// 8. Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let numero1 = 3;
let numero2 = 5;
let numero3 = 8;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
    console.log(true)
} else {
    console.log(false)
}

// 9 . Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

let numero1 = 3;
let numero2 = 5;
let numero3 = 8;

if (numero1 % 2 !== 0 || numero2 % 2 !== 0 || numero3 % 2 !== 0) {
    console.log(true)
} else {
    console.log(false)
}

// 10 . Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// . Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// . O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// . valorCustoTotal = valorCusto + impostoSobreOCusto
// . lucro = valorVenda - valorCustoTotal (lucro de um produto)

let custos = 100;
let venda = 200;
let imposto = custos * 0,2
let custosTotal = custo + imposto
let lucroDoProduto = venda - custosTotal

if (custo < 0 || venda < 0) {
    console.log("erro")
} else {
    console.log(lucroDoProduto * 1000)
}

// 11 . Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 3000;
let aliquotaINSS =

if (salarioBruto <= 1556,94) {
    aliquotaINSS = 0,8
} else if (salarioBruto > 1556,94 && salarioBruto <=2594,92) {
    aliquotaINSS = 0,9
} else if (salarioBruto > 2594,92 && <= 5189,82) {
    aliquotaINSS = 0,11
} else {
    aliquotaINSS = 5189,82
} 

let salarioBase = salarioBruto - aliquotaINSS * 100
let aliquotaIR =
let parcelaIR =

if (salarioBase <= 1903,98) {
    aliquotaIR = 0
} else if (salarioBase > 1903,98 && salarioBase <= 2.826,65) {
    aliquotaIR = 0,075; 
    parcelaIR = 142,80;
} else if (salarioBase > 2826,65 && salarioBase 3751,05) {
    aliquotaIR = 0,15;
    parcelaIR = 354,80;
} else if (salarioBase > 3751,05 && salarioBase <= 4664,68) {
    aliquotaIR = 0,225;
    parcelaIR = 636,13;
} else {
    aliquotaIR = 0,275
    parcelaIR = 869,36
}

let descontoDoIR = salarioBase - aliquotaIR * 100;
let salarioBaseComDescontosIR = descontoDoIR - parcelaIR
let salarioLiquido = salarioBase - salarioBaseComDescontosIR
