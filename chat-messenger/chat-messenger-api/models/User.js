const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, lowercase: true, required: true, trim: true },
    email: { type: String, lowercase: true, unique: true, trim: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);
