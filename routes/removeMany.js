const Person = require("../models/Person");

async function removeManyPeople() {
  var nameToRemove = "Mary";
  const personDeleted = await Person.deleteMany({ name: nameToRemove });
  console.log(personDeleted);
}

module.exports = removeManyPeople;
