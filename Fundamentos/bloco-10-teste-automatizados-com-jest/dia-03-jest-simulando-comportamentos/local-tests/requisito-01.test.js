// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.

const funcao = require('../local-requisitos/requsito-01')


describe('testa a função numberRandom', () => {
    test('testa as funcionalidades da função com o mock', () => {
        funcao.numberRandom = jest.fn().mockReturnValue(10)
        funcao.numberRandom()
        expect(funcao.numberRandom).toHaveBeenCalled();
        expect(funcao.numberRandom()).toBe(10)
        expect(funcao.numberRandom).toHaveBeenCalledTimes(2)
    })
})
