const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conversationSchema = new Schema(
  {
    name: { type: String, trim: true, default: "" },
    isDelete: { type: Boolean, default: false },
    member: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Conversation", conversationSchema);
