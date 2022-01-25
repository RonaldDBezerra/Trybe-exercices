const myRemove = require('../local-requisitos/requisito2')

let array = [1, 2, 3, 4]
myRemove(array, 3)

describe('requisito 2, função myRemove()', () => {
    test('chamada a função myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ])
    })

    test('chamada a função myRemove([1, 2, 3, 4], 3), NÃO retorna o array [1, 2, 3, 4', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })

    test('chamada a função myRemove, verifique que o array passado por parâmetro NÃO sofreu alterações', () => {
        expect(array).toEqual([1, 2, 3, 4])
    })

    test('chamada a função myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual(array)
    })
})