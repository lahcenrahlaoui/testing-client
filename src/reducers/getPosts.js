import { GET_POSTS } from "../constants/types";

const getPosts = (state = [], action) => {
    console.log("******* posts *******");
    console.log("action.type");
    console.log(action.type);
    console.log("action.payload");
    console.log(action.payload);

    console.log("******* posts *******");
    switch (action.type) {
        case GET_POSTS:
            return action.payload || false;

        default:
            return state;
    }
};

export default getPosts;
