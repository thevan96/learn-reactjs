import { messagesApi } from '../api';
import { contactApi } from '../api';

const defaultMessages = messagesApi.getMessageByRoom( );
// const myUserId = 1;

export const messages = (state = defaultMessages, action) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return [
        ...state.messages,
        action.message
      ]

    case 'DELETE_MESSAGE':
      return [
        [
          ...state.messages.slice(0, action.id - 1),
          ...state.messages.slice(action.id + 1)
        ]
      ]

    default:
      return state;
  }
}
