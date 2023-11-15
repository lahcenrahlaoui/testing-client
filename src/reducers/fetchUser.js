import { FETCH_USER, LOGOUT } from "../constants/types";

const fetchUser = (state = null, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload || false;

        default:
            return state;
    }
};

export default fetchUser;
