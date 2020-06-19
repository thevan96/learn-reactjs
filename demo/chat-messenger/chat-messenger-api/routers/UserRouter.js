const UserController = require("../Controller/UserController.js");

const express = require("express");
const route = express.Router();

route.get("/:id", UserController.find);
route.post("/register", UserController.register);
route.get("/", UserController.getAll);
route.post("/login", UserController.login);

module.exports = route;
