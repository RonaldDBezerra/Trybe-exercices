const objs = require('../local-requisitos/requisito5')
const obj1 = objs.obj1
const obj2 = objs.obj2
const obj3 = objs.obj3

describe('requisito 5, comoara 2 objetos', () => {
    test('compara 2 objetos', () => {
        expect(obj1).not.toEqual('obj2')
    })
})