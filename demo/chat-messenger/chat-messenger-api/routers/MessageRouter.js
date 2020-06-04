const MessageController = require("../Controller/MessengerController.js");

const express = require("express");
const route = express.Router();

route.post("/", MessageController.createMessages);
route.get("/:id", MessageController.getMessageByRoom);

module.exports = route;
