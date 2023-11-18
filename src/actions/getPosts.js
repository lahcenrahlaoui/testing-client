import axios from "axios";
import { GET_POSTS } from "../constants/types";
const getPosts = () => async (dispatch) => {
    let response;
    if (process.env.NODE_ENV === "development") {
        response = await axios.get(`/api/posts`);
    } else {
        response = await axios.get(
            `https://testing-mauve-five.vercel.app/api/posts`,
            {
                withCredentials: true,
            }
        );
    }

    dispatch({
        type: GET_POSTS,
        payload: response.data,
    });
};

export default getPosts;
