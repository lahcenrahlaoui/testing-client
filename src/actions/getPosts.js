import axios from "axios";
import { GET_POSTS, ADD_POSTS } from "../constants/types";

export const getPosts = () => async (dispatch) => {
    let response;
    if (process.env.NODE_ENV === "development") {
        response = await axios.get(`/api/posts`);
    } else {
        response = await axios.get(
            `https://testing-mauve-five.vercel.app/api/posts `,
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

export const addPosts =
    ({ title, content, tags }) =>
    async (dispatch) => {
        let response;
        if (process.env.NODE_ENV === "development") {
            response = await axios.post(`/api/createPost`, {
                title,
                content,
                tags,
            });
        } else {
            response = await axios.post(
                "https://testing-mauve-five.vercel.app/api/createPost",
                {
                    withCredentials: true,
                },
                { title, content, tags }
            );
        }

        console.log(
            "response+++++++++++++++++++++++++++++++++++++++++++++++++++++++"
        );
        console.log(
            "response+++++++++++++++++++++++++++++++++++++++++++++++++++++++"
        );

        console.log(response);
        console.log(title, content, tags);
        console.log(
            "response+++++++++++++++++++++++++++++++++++++++++++++++++++++++"
        );
        console.log(
            "response+++++++++++++++++++++++++++++++++++++++++++++++++++++++"
        );

        dispatch({
            type: ADD_POSTS,
            payload: response.data,
        });
    };
