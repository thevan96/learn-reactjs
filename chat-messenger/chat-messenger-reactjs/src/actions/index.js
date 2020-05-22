import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: "LOGIN",
    user: { name: "", id: "" },
    status: 0,
  });

  const result = await axios.post("http://localhost:3002/users/login", {
    email,
    password,
  });

  if (result.data.status) {
    dispatch({
      type: "LOGIN",
      user: result.data.result,
      status: 1,
    });
  } else {
    dispatch({
      type: "LOGIN",
      user: { name: "", id: "" },
      status: -1,
    });
  }
};

export const switchUser = (userId) => ({
  type: "SWITCH_USER",
  userId,
});

export const sendMessage = (text, idRoom) => ({
  type: "SEND_MESSAGE",
  text,
  idRoom,
});

export const filterInput = (filterText) => ({
  type: "FILTER_INPUT",
  filterText,
});

export const DEFAULT_USER = {
  id: 1,
};
