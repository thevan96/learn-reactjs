const RoomController = require("../Controller/RoomController.js");

const express = require("express");
const route = express.Router();

route.get("/", RoomController.getMember);
route.post("/", RoomController.createRoom);
route.get("/:id", RoomController.getAllRoomByUser);
route.get("/:idUser/:idContact", RoomController.getRoomById);

module.exports = route;
