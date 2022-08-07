import { combineReducers } from "redux";
import authReducer from "./authReducer";
import screensActiveReducer from "./screensActive.reducer";
import themeActiveReducer from './themeActive.reducer';

const reducer = combineReducers({
    screensActive: screensActiveReducer,
    themeActive: themeActiveReducer,
    auth: authReducer
});
 
export default reducer;