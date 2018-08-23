import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import auth from "./auth";
import sockets from "./sockets";

export default combineReducers({
  auth,
  form,
  sockets
});
