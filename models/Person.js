const mongoose = require("mongoose");
// defining  Schema
const personSchema = new mongoose.Schema({
  updated: { type: Date, default: Date.now },
  name: { type: String, required: true, trim: true },
  age: { type: Number, min: 18, max: 65 },
  favoriteFoods: {
    type: Array,
    validate: {
      validator: function (params) {
        return params.length > 0;
      },
      message: "You must choose a food",
    },
  },
});
// Person model
const Person = mongoose.model("person", personSchema);

module.exports = Person;
