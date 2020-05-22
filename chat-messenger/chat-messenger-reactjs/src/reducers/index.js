import { combineReducers } from "redux";

import contacts from "./contacts";
import userConversation from "./userConversation";
import messages from "./messages";
import filterText from "./filterText";
import user from "./user";

const reducers = combineReducers({
  contacts,
  userConversation,
  messages,
  filterText,
  user,
});

export default reducers;
