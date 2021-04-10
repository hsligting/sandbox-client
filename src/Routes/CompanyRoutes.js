import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import CompanyProfile from "../Pages/CompanyProfile";
import RecommendedStudents from "../Pages/RecommendedStudents";

const CompanyRoutes = () => {
    const currentUser = useSelector((state) => state.currentUser);
    return (
        <Switch>
            <Route path={"/home/dashboard"} render={() => <CompanyProfile />} />
            <Route path={"/home/recommended-students"} render={() => <RecommendedStudents />} />
            <Route>
                {currentUser.type === 0 ? <Redirect to={"/home/dashboard"} /> : <Redirect to={"/user-select"} />}
            </Route>
        </Switch>
    );
};

export default CompanyRoutes;
