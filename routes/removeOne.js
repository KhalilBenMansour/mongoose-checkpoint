const Person = require("../models/Person");

async function deletePerson(id) {
  const personDeleted = await Person.findByIdAndRemove(id);
  console.log(personDeleted + "Deleted successfully ! ");
}

module.exports = deletePerson;
