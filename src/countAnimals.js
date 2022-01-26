const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animalsCount = {};
  const { species } = data;
  if (animal === undefined) {
    species.forEach((element) => {
      animalsCount[element.name] = element.residents.length;
    });
    return animalsCount;
  }
  const searchAnimal = species.find((specie) => specie.name === animal.specie);
  let animalFound = searchAnimal.residents.length;
  const animalFoundArray = searchAnimal.residents;
  const chaves = Object.keys(animal);
  if (chaves.includes('sex')) {
    const searchSexs = animalFoundArray.filter((unity) => unity.sex === animal.sex);
    animalFound = searchSexs.length;
  }

  return animalFound;
}
module.exports = countAnimals;
