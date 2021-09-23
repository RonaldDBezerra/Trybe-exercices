const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (name) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const pegaAnimais = Animals.find((element) => element.name === name)
            if (pegaAnimais !== undefined) {
                return resolve(pegaAnimais);
            }
            
            return reject("Nenhum animal com esse nome!")
        }, 100);
    })
  );
    // console.log(findAnimalByName("Dog"))
  const getAnimal = (name) => findAnimalByName(name).then(animal => animal);

module.exports = {getAnimal, findAnimalByName}