const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
    },
    lastName: {
      type: String,
      require: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      reqired: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      require: true,
    },
    firebaseId: {
      type: String,
      require: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const UserModal = mongoose.model("users", UserSchema);
module.exports = UserModal;
