const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.Database_URL);
    console.log("db done", connect.connection.name);
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
