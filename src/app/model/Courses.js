const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String },
  description: { type: String, maxLength: 255 },
  image: { type: String, maxLength: 255 },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
  slug: { type: String, maxLength: 255 },
});

module.exports = mongoose.model("Course", Course);