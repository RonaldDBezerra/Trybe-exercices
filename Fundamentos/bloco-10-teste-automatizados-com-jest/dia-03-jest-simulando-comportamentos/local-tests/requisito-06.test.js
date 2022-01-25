const api = require('../local-requisitos/requisito-06')

describe('#requisito6 testa requisição', () => {
    const apiURL = jest.spyOn(api, "fetchURL");
    afterEach(apiURL.mockReset)

    test('testando caso a Promise resolva', async () => {
        apiURL.mockResolvedValue('request sucess');

        apiURL()
        expect(apiURL).toHaveBeenCalled()
        expect(apiURL).toHaveBeenCalledTimes(1)
        expect(apiURL()).resolves.toBe('request sucess')
        expect(apiURL).toHaveBeenCalledTimes(2)
    });

    test('testando requisição caso a Promise seja rejeitada', async () => {
        apiURL.mockRejectedValue('request faleid');

        expect(apiURL).toHaveBeenCalledTimes(0);
        expect(apiURL()).rejects.toMatch('request failed');
        expect(apiURL).toHaveBeenCalledTimes(1);
    });
});