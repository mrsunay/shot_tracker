import { combineReducers } from "redux";
import shots from "./shots";
import errors from "./errors";
import messages from "./messages";

export default combineReducers({
  shots,
  errors,
  messages
});
