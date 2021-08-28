// Crie uma função que receba uma frase e retorne qual a maior palavra.

let resultado = frase => {
    let fraseCortada = frase.split(" ")
    let resultado2 = []
    for (i = 0; i < fraseCortada.length; i+=1) {
        if (fraseCortada[i].length > resultado2.length) {
            resultado2 = fraseCortada[i]
        }
    }
    console.log(resultado2);
}
resultado("Antônio foi no banheiro e não sabemos o que aconteceu")