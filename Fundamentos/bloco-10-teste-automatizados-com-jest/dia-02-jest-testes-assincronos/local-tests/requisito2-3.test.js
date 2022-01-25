const getUserName = require('../local-requisitos/requisito2-3')

describe('requisito 02 -', () => {
    test('Chamada a função "getUserName" com o id, retorne o nome da pessoa', () => (
      getUserName(1).then((id) => {
        expect(id).toBe('Mark');
      })
    ));

    test('chamda a função com um id diferente, verifique se retorna a mensagem de erro', () => {
      expect.assertions(1);
      return getUserName(3).catch(error => (
        expect(error.message).toMatch('User with 3 not found.')
        ));
    })
  });


  describe('requisito 03 -', () => {
    test('Chamada a função "getUserName" com o id, retorne o nome da pessoa', async () => {
      const id = await getUserName(1);
      expect(id).toBe('Mark');
    });

    test('chamda a função com um id diferente, verifique se retorna a mensagem de erro', async () => {
      expect.assertions(1);
      try {
        await getUserName(3)
      } catch (error) {
        expect(error).toEqual(new Error('User with 3 not found.'))
      }
    })
  })