import { GET_USER } from "../constants/types";

const getUser = (state = null, action) => {
    console.log("******* user *******");
    console.log(action.type);
    console.log("******* user *******");
    switch (action.type) {
        case GET_USER:
            return action.payload || false;
        default:
            return state;
    }
};

export default getUser;
