const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    content: { type: String, required: true, trim: true },
    isDelete: { type: Boolean, default: false },
    idSender: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    idConversation: {
      type: Schema.Types.ObjectId,
      ref: "Conversation",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);
