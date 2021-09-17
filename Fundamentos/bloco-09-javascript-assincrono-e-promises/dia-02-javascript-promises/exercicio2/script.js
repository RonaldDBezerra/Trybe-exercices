const numerosRandon = () => {
const numerosRandon = []
 
for(i = 0; i < 10; i+=1) {
    const numero = Math.floor(Math.random() * 51)
    numerosRandon.push(numero)
    }

const resultado = numerosRandon.map((elemento) => elemento * elemento)
return resultado;
}

const somaArray = (param) => {
  const numerosRecebidos = param

  const resultado = numerosRecebidos.reduce((acc, elemento) => acc += elemento)
  return resultado;
}

const divideNumeros = (param) => {
    const divisores = [2,3,5,10]
    const resultado = divisores.map((elemento) => param / elemento)
    return resultado;
}

//--------------------- Função da promisse ---------------------------

const promise = new Promise((resolve, reject) => {
const numerosRandonSomados = somaArray(numerosRandon())

if (numerosRandonSomados > 8000) {
   return reject() 
}
resolve(numerosRandonSomados)

})
.then((numero) => divideNumeros(numero))
.then(() => console.log("Promise resolvida"))
// .catch(() => console.log("Promise rejeitada"))
.catch(() => console.log("É mais de oito mil! Essa promisse deve estar quebada"))
