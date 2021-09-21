const myRemoveWithoutCopy = require('../local-requisitos/requisito3');

let array = [1, 2, 3, 4]
myRemoveWithoutCopy(array, 3)

describe('requisito 3, função myRemoveWithoutCopy', () => {
    test('chamada a função myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })

    test('chamada a função myRemoveWithoutCopy([1, 2, 3, 4], 3), NÃO retorna o array [1, 2, 3, 4]', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })

    test('chamada a função myRemoveWithoutCopy, verifique que o array passado por parametro não sofreu alteração', () => {
        expect(array).not.toEqual([1, 2, 3, 4])
    })

    test('chamada a função myRemoveWithoutCopy([1, 2, 3, 4], 5), retorna o array esperado', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})