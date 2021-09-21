const myFizzBuzz = require('../local-requisitos/requisito4')

describe('requisito 4, função myFizzBuzz', () => {
    test('chamada a função myFizzBuzz com um numero divisivel por 3 e 5, verifique se retorna o esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz')
    })

    test('chamada a função myFizzBuzz com um numero divisivel por 3, verifique se retonar o esperado', () => {
        expect(myFizzBuzz(3)).toBe('fizz')
    })

    test('chamada a função myFizzBuzz com um numero divisivel por 5, verifique se retorna o esperado', () => {
        expect(myFizzBuzz(5)).toBe('buzz')
    })

    test('chamada a função myFizzBuzz com um numero que não é divisivel por 3 e 5, verifique se retorna o esperado', () => {
        expect(myFizzBuzz(2)).toBe(2)
    })

    test('chamda a função myFizzBuzz com um parametro que não seja um numero, verifique se retorna false', () => {
        expect(myFizzBuzz("test")).toBeFalsy()
    })
})