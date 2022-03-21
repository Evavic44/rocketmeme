import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";

const reducers = combineReducers({
	modal: modalReducer,
});

export default reducers;
