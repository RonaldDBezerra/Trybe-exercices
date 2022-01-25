
const sum = require('../local-requisitos/requisito1');
describe('requisito 1, função sum() ', () => {
    
    test("chamada a funçao sum(4, 5) o retorno deve ser 9", () => {
        expect(sum(4, 5)).toBe(9)
    });

    test("chamada a funçao sum(0, 0) o retorno deve ser 0", () => {
        expect(sum(0, 0)).toBe(0)
    });

    test("a função sum() deve lançar um erro quando um dos parametros não for um numero", () => {
        expect(() => sum(4, '5')).toThrow()
    });

    test('a função sum() deve lançar uma mensagem de error "parameters must be numbers" quando realizar a chamda sum(4,"5"', () => {
        expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
    })
});