const Conversation = require("../models/Conversation");
const Status = require("../Utils/Status");

module.exports = ConversationController = {
  getbyUser: async(req, res) =>{
    try {

    } catch (error) {
      res.json(Status.Fail(error));
    }
  }
};
