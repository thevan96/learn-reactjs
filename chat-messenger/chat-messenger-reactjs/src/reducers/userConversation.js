const userIdConversation = 1

const userConversation = (state = userIdConversation, action) => {
  switch (action.type) {
    case "SWITCH_USER":
      return action.userId;
    default:
      return state;
  }
};

export default userConversation;