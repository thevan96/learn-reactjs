import { combineReducers } from "redux";

import contacts from "./contacts";
import userConversation from "./userConversation";
import messages from "./messages";
import filterText from "./filterText";

const reducers = combineReducers({
  contacts,
  userConversation,
  messages,
  filterText,
});

export default reducers;
