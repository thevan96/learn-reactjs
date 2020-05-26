const messages = (state = [], action) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return [
        ...state,
        {
          idSender: action.idSender,
          content: action.content,
          idRoom: action.idRoom,
        },
      ];
    case "LOAD_MESSAGE":
      return action.messages;
    default:
      return state;
  }
};

export default messages;
