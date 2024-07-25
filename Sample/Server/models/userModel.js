import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    age: Number,
    phone: Number,
    address: String,
    gender: {
      type: String,
      default: "Male",
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
