const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

const ex1 = () => {
    lesson2.turno = "manhã"
    console.log(lesson2)
}

const ex2 = (objeto) => {
    console.log(Object.keys(objeto))
}

const ex3 = (objeto) => {
    console.log(Object.keys(objeto).length)
}

const ex4 = (objeto) => {
    console.log(Object.values(objeto))
}

const allLessons = {
    lesson1: Object.assign(lesson1),
    
    lesson2: Object.assign(lesson2),

    lesson3: Object.assign(lesson3),
}

 const ex6 = () => {
    const turma1 = allLessons.lesson1.numeroEstudantes
    const turma2 = allLessons.lesson2.numeroEstudantes
    const turma3 = allLessons.lesson3.numeroEstudantes
    const resultado = turma1 + turma2 + turma3

    console.log(`O numero de estudantes total no colegio é ${resultado}`)
 }

 const ex7 = (objeto, numero) => {
        console.log(Object.values(objeto)[numero])
 }

const ex8 = (objeto, chave, valor) => {
    for (i = 0; i < Object.keys(objeto).length; i+=1) {
        if (Object.entries(objeto)[i][0] === chave && Object.entries(objeto)[i][1] === valor) {
            return true
        } else {
            return false
        }
    }
}

console.log(ex8(lesson1, "materia", "Matemática"))