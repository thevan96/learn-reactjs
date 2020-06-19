import axios from "axios";

export const getUsers = async () => {
  return await axios.get("http://localhost:3002/users/");
};

export const getUserById = async (id) => {
  return await axios.get(`http://localhost:3002/users/${id}`);
};
