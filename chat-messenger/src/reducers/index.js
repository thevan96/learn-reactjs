import { combineReducers } from 'redux';
import { idConversation } from './conversations';
import { messages } from './messages';

const reducers = combineReducers({
  idConversation,
  messages
})

export default reducers;
