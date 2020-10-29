const { Schema } = require("mongoose");

const Post = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);
