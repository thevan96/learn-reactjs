import axios from "axios";

export const getRoomByUser = async (id) => {
  return await axios.get("http://localhost:3002/rooms/" + id);
};

export const getRoomByUserId = async (idUser, idContact) => {
  return await axios.get(`http://localhost:3002/rooms/${idUser}/${idContact}`);
};

export const createRoom = async (member) => {
  return await axios.post("http://localhost:3002/rooms", { member });
};
