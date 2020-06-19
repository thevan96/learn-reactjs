import { combineReducers } from "redux";

import contacts from "./contacts";
import userConversation from "./userConversation";
import messages from "./messages";
import filterText from "./filterText";
import user from "./user";
import focusInput from "./focusInput";
import idRoom from "./idRoom";

const reducers = combineReducers({
  contacts,
  userConversation,
  messages,
  filterText,
  user,
  focusInput,
  idRoom
});

export default reducers;
