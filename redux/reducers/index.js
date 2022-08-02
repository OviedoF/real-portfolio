import { combineReducers } from "redux";
import screensActiveReducer from "./screensActive.reducer";
import themeActiveReducer from './themeActive.reducer';

const reducer = combineReducers({
    screensActive: screensActiveReducer,
    themeActive: themeActiveReducer
});
 
export default reducer;