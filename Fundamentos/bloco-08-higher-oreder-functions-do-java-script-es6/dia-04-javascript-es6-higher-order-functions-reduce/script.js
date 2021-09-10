const assert = require('assert');
const { resourceUsage } = require('process');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const resultado = arrays.reduce((acumulador, elemento) => acumulador.concat(elemento))
 return resultado;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);

// Para os exercícios 2, 3 e 4 considere o seguinte array:

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// 2 - Crie uma string com os nomes de todas as pessoas autoras.

const expectedResult2 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  let resultado = books.reduce((acumulador, elemento, index, array) => {
      if (index !== array.length -1){
         return acumulador += `${elemento.author.name}, `
      } else {
         return acumulador += `${elemento.author.name}.`
      }
},"")
  return resultado;
}

assert.strictEqual(reduceNames(), expectedResult2);

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const expectedResult3 = 43;

function averageAge() {
  const resultado = books.reduce((acumulador, elemento, index, array) => {
    if (index !== array.length - 1) {
    acumulador = acumulador + (elemento.releaseYear - elemento.author.birthYear)
    return acumulador
    } else {
    acumulador = acumulador + (elemento.releaseYear - elemento.author.birthYear)
    return acumulador / (array.length)    
    }
  },0)
   return resultado;
}

assert.strictEqual(averageAge(), expectedResult3);

// 4 - Encontre o livro com o maior nome.

const expectedResult4 = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  function longestNamedBook() {
    const resultado = books.reduce((acumulador, elemento) => {
        if (elemento.name.length > acumulador.name.length) {
            return acumulador = elemento
        } else {
            return acumulador
        }
    })
    return resultado;
  }

assert.deepStrictEqual(longestNamedBook(), expectedResult4);

// 5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    return names.reduce((acc, curr) =>
       acc + curr.split('').reduce((acumulator, current) => {
          if (current === 'a' || current === 'A') return acumulator + 1;
          return acumulator;
       }, 0), 0);
}

assert.deepStrictEqual(containsA(), 20);