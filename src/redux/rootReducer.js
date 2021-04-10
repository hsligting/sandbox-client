import { combineReducers } from "redux";
import slices from "./slices";

const rootReducer = combineReducers({
    currentUser: slices.currentUser.reducer,
});

export default rootReducer;
