import { combineReducers } from "redux";
import getUser from "./getUser";
import getPosts from "./getPosts";

const reducers = combineReducers({
    user: getUser,
    posts: getPosts,
});

export default reducers;
