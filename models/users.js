const { Schema, model } = require("mongoose");

const User = new Schema(
  {
    name:
    {
      first: { type: String, required: true},
      last: { type: String, required: true},
    },
    gender: { type: String, required: true },
    password: { type: String, required: true },
    birthday:
    {
      year: { type: Number, required: true },
      month: { type: Number, required: true },
      day: { type: Number, required: true },
    },
    work:
    {
      institution: { type: String, required: true },
      state: { type: String, required: true },
      city: { type: String, required: true },
    },
    contact:
    {
      phone: { type: String, required: true },
      email: { type: String, required: true }
    }
  },
  { timestamps: true }
);

module.exports = model('users', User)
