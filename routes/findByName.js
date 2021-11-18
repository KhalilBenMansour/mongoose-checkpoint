const Person = require("../models/Person");

async function findPeopleByName(personName) {
  const personFBN = await Person.find({ name: personName });
  console.log(personFBN);
}
module.exports = findPeopleByName;
