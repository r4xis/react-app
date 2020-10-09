import { combineReducers } from "redux";
import sideReducer from "./sideReducer";
import mainReducer from "./mainReducer";

export default combineReducers({
  categories: sideReducer,
  main: mainReducer,
});
