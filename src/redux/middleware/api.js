import axios from "axios";
import { api } from "../utilityActions";

export const apiMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
    if (action.type !== api.type) {
        return next(action);
    }
    const { call, success, failure } = action.payload;
    try {
        const { data } = await axios({
            baseURL: "https://pji3ct6u5g.execute-api.us-west-2.amazonaws.com/hackathon",
            ...call,
        });

        if (success) {
            dispatch(success(data));
        }
    } catch (e) {
        if (failure) {
            dispatch(failure(e.response));
        }
    }
};
