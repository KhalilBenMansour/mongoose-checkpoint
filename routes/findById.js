const Person = require("../models/Person");

async function findPersonById(id) {
  let personFId = await Person.findById({ _id: id });
  console.log(personFId);
  return personFId;
}
module.exports = findPersonById;
