const data = require('../data/zoo_data');

// const expected = {
//   lions: 4,
//   tigers: 2,
//   bears: 3,
//   penguins: 4,
//   otters: 4,
//   frogs: 2,
//   snakes: 2,
//   elephants: 4,
//   giraffes: 6,
// };

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
