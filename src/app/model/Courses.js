const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String },
  description: { type: String, maxLength: 255 },
  image: { type: String, maxLength: 255 },
  createAt: { type: Date, default: Date.now() },
  updateAt: { type: Date, default: Date.now() },
  slug: { type: String, slug: "name", unique: true },
});

module.exports = mongoose.model("Course", Course);
