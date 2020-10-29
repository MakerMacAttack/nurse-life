const { Schema } = require("mongoose");

const Post = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: false },
    imgURL: { type: String, required: false },
  },
  { timestamps: true }
);
