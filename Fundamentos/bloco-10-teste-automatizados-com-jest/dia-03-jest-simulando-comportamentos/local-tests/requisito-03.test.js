// Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

const funcao = require('../local-requisitos/requsito-01')
jest.mock('../local-requisitos/requsito-01')

test('teste a chamada da funçâo', () => {
    funcao.numberRandom.mockImplementation((a, b, c) => a * b * c)

    funcao.numberRandom(2, 3, 4)

    expect(funcao.numberRandom).toHaveBeenCalled()
    expect(funcao.numberRandom).toHaveBeenCalledTimes(1)
    expect(funcao.numberRandom).toHaveBeenCalledWith(2, 3, 4)
    expect(funcao.numberRandom(2, 3, 4)).toBe(24)

    funcao.numberRandom.mockReset()

    funcao.numberRandom.mockImplementation((a) => a * 2)

    funcao.numberRandom(4)

    expect(funcao.numberRandom).toHaveBeenCalled()
    expect(funcao.numberRandom).toHaveBeenCalledTimes(1)
    expect(funcao.numberRandom).toHaveBeenCalledWith(4)
    expect(funcao.numberRandom(4)).toBe(8)
})
