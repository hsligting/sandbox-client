import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import MentorDashboard from "../Pages/MentorDashboard";
import MentorProfile from "../Pages/MentorProfile";
import MentorPendingRequests from "../Pages/MentorPendingRequests";
import MentorJobListings from "../Pages/MentorJobListings";

const MentorRoutes = () => {
    const currentUser = useSelector((state) => state.currentUser);
    return (
        <Switch>
            <Route path={"/home/dashboard"} render={() => <MentorDashboard />} />
            <Route path={"/home/profile"} render={() => <MentorProfile />} />
            <Route path={"/home/pending-requests"} render={() => <MentorPendingRequests />} />
            <Route path={"/home/job-listings"} render={() => <MentorJobListings />} />
            <Route>
                {currentUser.type === 0 ? <Redirect to={"/home/dashboard"} /> : <Redirect to={"/user-select"} />}
            </Route>
        </Switch>
    );
};

export default MentorRoutes;
