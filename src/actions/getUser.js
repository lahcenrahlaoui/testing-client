import axios from "axios";
import { GET_USER, baseURL } from "../constants/types";
const getUser = () => async (dispatch) => {
    let response;

    if (process.env.NODE_ENV === "development") {
        response = await axios.get(`/api/current_user`);
    } else {
        
        response = await axios.get(`${baseURL}/api/current_user`, {
            withCredentials: true,
        });
    }

    console.log(
        "-----------------------------------------------------response"
    );
    console.log(response);
    console.log(
        "-----------------------------------------------------response"
    );

    dispatch({
        type: GET_USER,
        payload: response.data,
    });
};

export default getUser;
