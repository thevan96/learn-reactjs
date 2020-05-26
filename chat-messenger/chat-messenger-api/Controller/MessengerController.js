const Message = require("../models/Message");
const Status = require("../Utils/Status");

module.exports = MessageController = {
  createMessages: async (req, res) => {
    try {
      const newMessage = Message(req.body);
      const saveMessage = await newMessage.save();
      return res.json(Status.Success(saveMessage));
    } catch (error) {
      res.json(Status.Fail(error));
    }
  },

  getMessageByRoom: async (req, res) => {
    try {
      Message.find({ idRoom: req.params.id }, function (err, result) {
        if (result) {
          res.json(Status.Success(result));
        } else {
          res.json(Status.Fail(err));
        }
      });
    } catch (error) {
      res.json(Status.Fail(error));
    }
  },
};
