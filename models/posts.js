const { Schema, model } = require("mongoose");

const Post = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: 'users' },
    content: { type: String, required: false },
    imgURL: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = model('posts', Post)

// schema for posts
