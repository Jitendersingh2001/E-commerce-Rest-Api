const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please add the name"],
    },
    email: {
      type: String,
      required: [true, "please add the E-mail"],
      unique: [true, "E-mail/user already exist"],
    },
    password: {
      type: String,
      required: [true, "please add the Password"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "users",
  }
);
module.exports = mongoose.model("Users", userSchema);
