const Person = require("../models/Person");

async function updateAge(namePerson) {
  const personUpdatedAge = await Person.findOneAndUpdate(
    { name: namePerson },
    { $set: { age: 20 } },
    { new: true }
  );

  console.log(personUpdatedAge);
}
module.exports = updateAge;
