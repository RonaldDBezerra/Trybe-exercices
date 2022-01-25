// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const funcoes = require('../local-requisitos/requisito-04')

describe('faça o que o requisito pede', () => {
    test('#requisito5', () => {
    const test = jest.spyOn(funcoes, "caixaAlta")
    .mockImplementation((string => string.toLowerCase()))
    
    funcoes.caixaAlta.mockRestore()
    
        funcoes.caixaAlta("ronald")
        expect(funcoes.caixaAlta("ronald")).toBe("RONALD")
    })
})