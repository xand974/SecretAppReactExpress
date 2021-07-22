const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    Friends: {
      //mettre les id des friends dans les friends
      type: Array,
      default: [],
    },
    Posts: {
      type: Array,
      default: [],
    },
    profilePicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    description: String,
  },

  //date de la création etc ..
  { timestamps: true }
);

module.exports = new mongoose.model("User", userSchema);
