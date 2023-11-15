import { combineReducers } from "redux";
import fetchUser from "./fetchUser";

const reducers = combineReducers({
    user: fetchUser,
});

export default reducers;
