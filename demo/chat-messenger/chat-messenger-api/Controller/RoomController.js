const Room = require("../models/Room");
const Status = require("../Utils/Status");

module.exports = RoomController = {
  getMember: async (req, res) => {
    try {
      const member = await Room.findById(req.param.id).select("member -_id");
      return res.json(Status.Success(member));
    } catch (error) {
      res.json(Status.Fail(error));
    }
  },
  
  createRoom: async (req, res) => {
    try {
      const room = new Room(req.body);
      const saveRoom = await room.save();
      return res.json(Status.Success(saveRoom));
    } catch (error) {
      res.json(Status.Fail(error));
    }
  },

  getAllRoomByUser: async (req, res) => {
    try {
      const allRoom = await Room.find();
      const { id } = req.params;
      const roomFilter = allRoom.filter((room) => room.member.includes(id));
      return res.json(Status.Success(roomFilter));
    } catch (error) {
      res.json(Status.Fail(error));
    }
  },

  getRoomById: async (req, res) => {
    try {
      const allRoom = await Room.find();
      const { idUser, idContact } = req.params;
      const roomFilter = allRoom.filter(
        (room) =>
          room.member.includes(idUser) && room.member.includes(idContact)
      );
      return res.json(Status.Success(roomFilter));
    } catch (error) {
      res.json(Status.Fail(error));
    }
  },
};
