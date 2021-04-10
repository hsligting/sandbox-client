import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ render, ...rest }) {
    const currentUser = useSelector((state) => state.currentUser);
    return <Route {...rest} render={(props) => (currentUser.isAuthenticated ? render() : <Redirect to="/" />)} />;
}

export default PrivateRoute;
