import { combineReducers } from "redux";
import shots from "./shots";
import errors from "./errors";
import messages from "./messages";
import news from "./news";
import auth from "./auth";

export default combineReducers({
  shots,
  errors,
  messages,
  news,
  auth
});
