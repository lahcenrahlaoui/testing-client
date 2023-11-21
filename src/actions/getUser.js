import axios from "axios";
import { GET_USER } from "../constants/types";
const getUser = () => async (dispatch) => {
    let response;

    // if (process.env.NODE_ENV === "development") {
    //     response = await axios.get(`/api/current_user`);
    // } else {
    //     response = await axios.get(
    //         `https://testing-mauve-five.vercel.app/api/current_user`,
    //         {
    //             withCredentials: true,
    //         }
    //     );
    // }

    console.log("--------------------------response");
    console.log("--------------------------response");
    console.log(
        "--------------------------response-------------------------------------"
    );

    // config axios
    const link = `https://server-2nfv.onrender.com/api/current_user`;
    // const link = `https://finalspaceapi.com/api/v0/character/?limit=2`
    const headers = {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
    };

    const credentials = {
        withCredentials: true,
    };

    const responsexxx = await axios.get(link);

    console.log(responsexxx);

    console.log(
        "--------------------------response----------------------------------"
    );
    console.log("--------------------------response");
    console.log("--------------------------response");

    dispatch({
        type: GET_USER,
        payload: responsexxx.data,
    });
};

export default getUser;
