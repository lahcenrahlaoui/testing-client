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
    const headers = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const credentials = {
        withCredentials: true,
    };

    const responsexxx = await axios
        .get(link, headers, credentials)
        .then(() => {
            console.log("working fine ");
        })
        .catch((err) => {
            console.log(err);
        });

    console.log(responsexxx);

    console.log("--------------------------response");
    console.log("--------------------------response");

    dispatch({
        type: GET_USER,
        payload: response.data,
    });
};

export default getUser;
