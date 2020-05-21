const User = require("../models/User");
const Status = require("../Utils/Status");

module.exports = UserController = {
  find: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.json(Status.Success(user));
    } catch (error) {
      res.json(Status.Fail(error));
    }
  },

  getAll: async (req, res) => {
    try {
      const user = await User.find();
      res.json(Status.Success(user));
    } catch (error) {
      res.json(Status.Fail(error));
    }
  },

  register: async (req, res) => {
    try {
      const user = new User(req.body);
      const saveUser = await user.save();
      res.json(Status.Success(saveUser));
    } catch (error) {
      res.json(Status.Fail(error));
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const userLogin = await User.find({ email, password });

      if (userLogin.length) return res.json(Status.Success(userLogin));
      return res.json(Status.Fail("User not found"));
    } catch (error) {
      res.json(Status.Fail(error));
    }
  },
};
