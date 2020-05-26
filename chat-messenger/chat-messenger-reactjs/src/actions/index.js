import * as Auth from "../API/Auth";
import { getRoomByUserId } from "../API/RoomAPI";
import { getMessages } from "../API/MessageAPI";
import { createMessage } from "../API/MessageAPI.js";
import { createRoom } from "../API/RoomAPI";

export const login = (email, password) => async (dispatch) => {
  dispatch({
    type: "LOGIN",
    user: { name: "", id: "" },
    status: 0,
  });

  const result = Auth.login(email, password);

  result.then((result) => {
    if (result.data.status) {
      dispatch({
        type: "LOGIN",
        user: result.data.result,
        status: 1,
      });
      localStorage.setItem("status", result.data.status);
      localStorage.setItem("name", result.data.result.name);
      localStorage.setItem("id", result.data.result._id);
    } else {
      dispatch({
        type: "LOGIN",
        user: { name: "", id: "" },
        status: -1,
      });
    }
  });
};

export const checkIsRoom = (idUser, idContact) => async (dispatch) => {
  dispatch(switchUser(idContact));
  getRoomByUserId(idUser, idContact).then((rs) => {
    if (rs.data.result.length) {
      dispatch(setRoom(rs.data.result[0]._id));
      getMessages(rs.data.result[0]._id).then((rs1) => {
        dispatch(loadMessages(rs1.data.result));
      });
    } else {
      dispatch(loadMessages([]));
      dispatch(setRoom(""));
    }
  });
};

export const setRoom = (idRoom) => ({
  type: "SET_IDROOM",
  idRoom,
});

export const logout = () => ({
  type: "LOGOUT",
});

export const switchUser = (userId) => ({
  type: "SWITCH_USER",
  userId,
});

export const sendMessage = (
  content,
  idRoom,
  idSender,
  userConversation
) => async (dispatch) => {
  if (idRoom && content) {
    createMessage(content, idSender, idRoom).then((rs) => {
      if (rs.status) {
        dispatch({
          type: "SEND_MESSAGE",
          idSender,
          content,
          idRoom,
        });
      }
    });
  } else {
    createRoom([idSender, userConversation]).then((rs) => {
      if (rs.status === 200 && content.length > 0) {
        createMessage(content, idSender, rs.data.result._id).then((rs1) => {
          if (rs1.status) {
            dispatch({
              type: "SEND_MESSAGE",
              idSender,
              content,
              idRoom,
            });
          }
        });
      }
    });
  }
};

export const filterInput = (filterText) => ({
  type: "FILTER_INPUT",
  filterText,
});

export const focusInput = () => ({
  type: "FOCUS_INPUT",
});

export const blurInput = () => ({
  type: "BLUR_INPUT",
});

export const loadMessages = (messages) => ({
  type: "LOAD_MESSAGE",
  messages,
});
