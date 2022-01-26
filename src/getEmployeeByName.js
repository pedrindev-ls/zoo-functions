const data = require('../data/zoo_data');

function getEmployeeByName(jober) {
  const { employees } = data;
  let worker = {};
  if (jober === undefined) {
    return worker;
  }
  employees.forEach((element) => {
    const value = Object.values(element);
    if (value.includes(jober)) {
      worker = element;
    }
  });
  return worker;
}

module.exports = getEmployeeByName;
