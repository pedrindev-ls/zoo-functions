const data = require('../data/zoo_data');

const { species } = data;
let animalFound = [];
const conference = (value) => species.forEach((element) => {
  if (element.id === value) {
    animalFound.push(element);
  }
});

function getSpeciesByIds(value, ...ids) {
  if (value === undefined) {
    return animalFound;
  }
  animalFound = [];
  conference(value);
  if (ids.length) {
    conference(ids[0]);
  }
  return animalFound;
}

module.exports = getSpeciesByIds;
