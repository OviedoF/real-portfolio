import { LOGOUT, LOGIN } from "../types";

const initialState = true;

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return true;
        case LOGOUT: 
            return false;
        default:
            return state;
    }
}