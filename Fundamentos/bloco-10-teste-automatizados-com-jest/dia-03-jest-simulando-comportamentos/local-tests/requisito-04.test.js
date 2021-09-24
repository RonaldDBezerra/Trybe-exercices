// Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.

const funcoes = require('../local-requisitos/requisito-04')
jest.mock('../local-requisitos/requisito-04')
describe('faça o que o requisito pede', () => {
    test('#requisito4', () => {
        funcoes.caixaAlta.mockImplementation((string => string.toLowerCase()))
    
        funcoes.caixaAlta("RONALD")
    
        expect(funcoes.caixaAlta).toHaveBeenCalled()
        expect(funcoes.caixaAlta).toHaveBeenCalledTimes(1)
        expect(funcoes.caixaAlta).toHaveBeenCalledWith("RONALD")
        expect(funcoes.caixaAlta("RONALD")).toBe("ronald")
    })
    
    test('#requisito4', () => {
        funcoes.primeiraLetra.mockImplementation((string => string[string.length - 1]))
    
        funcoes.primeiraLetra("ronald")
    
        expect(funcoes.primeiraLetra).toHaveBeenCalled()
        expect(funcoes.primeiraLetra).toHaveBeenCalledTimes(1)
        expect(funcoes.primeiraLetra).toHaveBeenCalledWith("ronald")
        expect(funcoes.primeiraLetra("ronald")).toBe("d")
    })
    
    test('#requisito4', () => {
        funcoes.concatenaString.mockImplementation((string1, string2, string3) => `${string1} ${string2} ${string3}`)
    
        funcoes.concatenaString("Ronald", "Damasio", "Bezerra")
    
        expect(funcoes.concatenaString).toHaveBeenCalled()
        expect(funcoes.concatenaString).toHaveBeenCalledTimes(1)
        expect(funcoes.concatenaString).toHaveBeenCalledWith("Ronald", "Damasio", "Bezerra")
        expect(funcoes.concatenaString("Ronald", "Damasio", "Bezerra")).toBe("Ronald Damasio Bezerra")
    })
})
