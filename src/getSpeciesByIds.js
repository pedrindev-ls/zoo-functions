const data = require('../data/zoo_data');

function getSpeciesByIds(value, ...ids) {
  const { species } = data;
  const animalFound = [];
  if (value === undefined) {
    return animalFound;
  }
  species.forEach((element) => {
    if (element.id === value) {
      animalFound.push(element);
    }
  });
  if (ids.length) {
    species.forEach((element) => {
      if (element.id === ids[0]) {
        animalFound.push(element);
      }
    });
  }
  return animalFound;
}

module.exports = getSpeciesByIds;
