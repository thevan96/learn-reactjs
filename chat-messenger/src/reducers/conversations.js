const defautlUserConversation = 2;
const myUserId = 1;

export const idConversation = (state = defautlUserConversation, action) => {
  switch (action.type) {
    case 'SWITCH_USER':
      if (action.userId !== myUserId) {
        return action.userId
      }
      break;

    default:
      return state;
  }
}
