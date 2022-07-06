const mongoose = require("mongoose");
const schema = mongoose.Schema;

const PersonSchema = new schema({
  name: {
    required: true,
    type: String,
  },
  age: {
    type: Number,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
    unique: true,
  },
  group: {
    type: String,
  },
});

module.exports = mongoose.model("person", PersonSchema);
