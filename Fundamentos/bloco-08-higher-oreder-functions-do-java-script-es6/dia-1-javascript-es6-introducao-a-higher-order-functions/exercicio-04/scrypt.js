const Hof = (gabarito, respostas, callBack) => {
    let notaFinal = callBack(gabarito, respostas)
    return notaFinal
}

const callBack = (gabarito, respostas) => {
    resultado = 0
    
    for (i = 0; i < respostas.length; i+=1) {
        
        if (respostas[i] === "N.A") {
            resultado = resultado;
        } else if (respostas[i] === gabarito[i]){
            resultado+=1
        } else {
            resultado-=0.5
        }
    }
    return resultado;
}

console.log(Hof(['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'], ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'], callBack))