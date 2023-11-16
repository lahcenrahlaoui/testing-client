import { GET_USER } from "../constants/types";

const getUser = (state = null, action) => {
    switch (action.type) {
        case GET_USER:
            return action.payload || false;

        default:
            return state;
    }
};

export default getUser;
