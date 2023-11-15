import axios from "axios";
import { FETCH_USER } from "../constants/types";
export const getUser = () => async (dispatch) => {
    let response;
    if (process.env.NODE_ENV === "development") {
        response = await axios.get(`/api/current_user`);
    } else {
        response = await axios.get(
            `https://testing-mauve-five.vercel.app/api/current_user`,
            {
                withCredentials: true,
            }
        );
    }

    dispatch({
        type: FETCH_USER,
        payload: response.data,
    });
};
