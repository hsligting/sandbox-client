import { api } from "../utilityActions";
import loginWithToken from "./loginWithToken";

export default (credentials) =>
    api({
        call: {
            url: "/login",
            method: "post",
            data: credentials,
        },
        success: loginWithToken,
        label: "login",
    });
