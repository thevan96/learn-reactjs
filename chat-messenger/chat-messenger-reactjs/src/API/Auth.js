import axios from "axios";

export const login = async (email, password) => {
  try {
    return await axios.post("http://localhost:3002/users/login", {
      email,
      password,
    });
  } catch (error) {
    console.error(error);
  }
};

