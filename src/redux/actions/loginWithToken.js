import { routerHistory } from "../../routerHistory";
import setAuthToken from "../../utilities/setAuthToken";
import slices from "../slices";

export default (response) => (dispatch) => {
    console.log(response);
    dispatch(
        slices.currentUser.actions.set({
            username: response.authToken.username,
            isAuthenticated: response.success,
        })
    );
    setAuthToken(response.authToken.token);
    routerHistory.push("/home");
};
