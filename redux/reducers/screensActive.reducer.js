import { CHANGE_SCREEN, QUIT_SCREEN } from "../types";

const initialState = {
    themes: false,
    language: false,
    isLoading: false
};

export default function screensActiveReducer(state = initialState, action) {
    switch(action.type){
        case CHANGE_SCREEN:
            return {
                ...state, 
                [action.payload]: true
            }
        case QUIT_SCREEN:
            return {
                ...state,
                [action.payload]: false
            }
        default:
            return state
    }
};