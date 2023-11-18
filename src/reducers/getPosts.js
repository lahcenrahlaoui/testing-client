import { GET_POSTS } from "../constants/types";

const getPosts = (state = [], action) => {
    console.log(state)
    switch (action.type) {
        case GET_POSTS:
            return action.payload || false;

        default:
            return state;
    }
};

export default getPosts;
