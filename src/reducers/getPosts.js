import { GET_POSTS, ADD_POSTS } from "../constants/types";

const getPosts = (state = [], action) => {
    console.log("******* posts *******");
    console.log(state);
    console.log("******* posts *******");
    switch (action.type) {
        case GET_POSTS:
            return action.payload;
        case ADD_POSTS:
            return [...state, action.payload];

        default:
            return state;
    }
};

export default getPosts;
