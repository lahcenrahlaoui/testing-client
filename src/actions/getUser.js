import axios from "axios";
import { GET_USER } from "../constants/types";
const getUser = () => async (dispatch) => {
    let response;

    const headers = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
    };
    const credentials = {
        withCredentials: true,
    };

    if (process.env.NODE_ENV === "development") {
        response = await axios.get(`/api/current_user`);
    } else {
        response = await axios.get(
            `https://testing-mauve-five.vercel.app/api/current_user`,

            credentials
        );
    }

    dispatch({
        type: GET_USER,
        payload: response.data,
    });
};

export default getUser;
