const userConversation = (state = '', action) => {
  switch (action.type) {
    case "SWITCH_USER":
      return action.userId;
    default:
      return state;
  }
};

export default userConversation;