import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import StudentDashboard from "../Pages/StudentDashboard";
import StudentProfile from "../Pages/StudentProfile";
import StudentPendingRequests from "../Pages/StudentPendingRequests";
import { useSelector } from "react-redux";

const StudentRoutes = () => {
    const currentUser = useSelector((state) => state.currentUser);
    return (
        <Switch>
            <Route path={"/home/dashboard"} render={() => <StudentDashboard />} />
            <Route path={"/home/profile"} render={() => <StudentProfile />} />
            <Route path={"/home/pending-requests"} render={() => <StudentPendingRequests />} />
            <Route>
                {currentUser.type === 0 ? <Redirect to={"/home/dashboard"} /> : <Redirect to={"/user-select"} />}
            </Route>
        </Switch>
    );
};

export default StudentRoutes;
