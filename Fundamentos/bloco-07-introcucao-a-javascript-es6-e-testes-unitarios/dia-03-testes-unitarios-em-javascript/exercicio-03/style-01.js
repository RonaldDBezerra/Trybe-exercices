const assert = require('assert');

const greetPeople = (people) => {
    let greeting = 'Hello ';
    const resultado = []
    for (i = 0; i < people.length; i+=1) {
      resultado.push(greeting + people[i]);
    }
    return resultado;
  };
 
  const parameter = ['Irina', 'Ashleigh', 'Elsa'];
  const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

  assert.deepEqual(greetPeople(['Irina', 'Ashleigh', 'Elsa']), result, "algo de errado" )