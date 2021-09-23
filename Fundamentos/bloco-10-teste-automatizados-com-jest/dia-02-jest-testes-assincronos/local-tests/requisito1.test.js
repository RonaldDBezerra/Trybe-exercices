const uppercase =  require('../local-requisitos/requisito1')

test('verifique se a chamada da função uppercase, tranforma as palavras em maiusculos', (done) => {
    uppercase('ronald', (callback) => {
        try {
            expect(callback).toBe('RONALD')
            done()
        } catch (error) {
            done(error)
        }
    })
})