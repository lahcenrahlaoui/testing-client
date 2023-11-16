import { combineReducers } from "redux";
import getUser from "./getUser";

const reducers = combineReducers({
    user: getUser,
});

export default reducers;
