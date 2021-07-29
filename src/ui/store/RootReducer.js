import { combineReducers } from "redux";
import UserReducer from "./Reducers/UserReducer";
import AgeReducer from "./Reducers/AgeReducer";

export default combineReducers({
  UserReducer,
  AgeReducer,
});
