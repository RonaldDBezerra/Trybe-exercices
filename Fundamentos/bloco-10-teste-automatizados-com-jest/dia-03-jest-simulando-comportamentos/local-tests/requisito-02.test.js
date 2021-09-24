// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const funcao = require('../local-requisitos/requsito-01')
jest.mock('../local-requisitos/requsito-01')


   test('teste a chamada da funçâo', () => {
       funcao.numberRandom.mockImplementation((a, b) => a / b)
       
       funcao.numberRandom(10,5);
       
       expect(funcao.numberRandom).toHaveBeenCalled();
       expect(funcao.numberRandom).toHaveBeenCalledTimes(1)
       expect(funcao.numberRandom).toHaveBeenCalledWith(10, 5)
       expect(funcao.numberRandom(10,5)).toBe(2)
   })
