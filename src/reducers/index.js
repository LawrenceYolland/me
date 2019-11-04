import { combineReducers } from "redux";
import mode from "./daynight";
import menu from "./menu";

export default combineReducers({
  mode,
  menu
});
