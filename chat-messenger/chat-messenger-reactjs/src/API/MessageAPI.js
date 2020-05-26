import axios from "axios";

export const createMessage = async (content, idSender, idRoom) => {
  return await axios.post("http://localhost:3002/messages/", {
    content,
    idSender,
    idRoom,
  });
};

export const getMessages = async (idRoom) => {
  return await axios.get(`http://localhost:3002/messages/${idRoom}`);
};
