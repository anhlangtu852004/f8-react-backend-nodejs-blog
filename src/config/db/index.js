const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/f8_education_dev");
    console.log("server is connected ........");
  } catch (error) {
    console.log("conecttion falisesd ........");
  }
}

module.exports = { connect };
