const caixaAlta = (string) => string.toUpperCase()
const primeiraLetra = (string) => string[string.length - 1]
const concatenaString = (string1, string2) => `${string1} ${string2}`
// console.log(primeiraLetra("ronald"))

module.exports = {
    caixaAlta,
    primeiraLetra,
    concatenaString
}