// exercicio-03
// 1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
// console.log("Bem-vinda, " + info.personagem + "!")

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
info.recorrente = "sim"
// console.log(info)

// 3 - Faça um for/in que mostre todas as chaves do objeto.
for(index in info){ 
    // console.log(index);
}

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for(index in info) {
    // console.log(info[index]);
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.
let secondInfo = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
};
for(index in info && secondInfo) {
    console.log(info[index] + " " + "e" + " " + secondInfo[index])
}

