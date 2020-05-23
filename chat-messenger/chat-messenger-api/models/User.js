const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, lowercase: true, unique: true, trim: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    avatar: {
      type: String,
      default: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
