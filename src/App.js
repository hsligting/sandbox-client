import React from "react";
import { Normalize } from "styled-normalize";
import { Route, Router, Switch } from "react-router-dom";
import { routerHistory } from "./routerHistory";
import axios from "axios";
import { useSelector } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import StudentDashboard from "./Pages/StudentDashboard";
import MentorDashboard from "./Pages/MentorDashboard";
import SelectUserType from "./Pages/SelectUserType";
import CompanyProfile from "./Pages/CompanyProfile";
import StudentRoutes from "./Routes/StudentRoutes";
import MentorRoutes from "./Routes/MentorRoutes";
import CompanyRoutes from "./Routes/CompanyRoutes";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const theme = createMuiTheme({
    palette: {
        primary: { main: "#6FCF97" },
        secondary: {
            main: "#233336",
        },
        white: {
            main: "#ffffff",
        },
    },
});

function App() {
    const currentUser = useSelector((state) => state.currentUser);

    return (
        <>
            <Normalize />
            <ThemeProvider theme={theme}>
                <Router history={routerHistory}>
                    <Switch>
                        <Route exact path={"/"} render={() => <SelectUserType />} />
                        <Route path={"/home"} render={() => renderMain(currentUser.type)} />
                    </Switch>
                </Router>
            </ThemeProvider>
        </>
    );
}

function renderMain(userType) {
    if (userType === 0) {
        return <StudentRoutes />;
    }
    if (userType === 1) {
        return <MentorRoutes />;
    }
    if (userType === 2) {
        return <CompanyRoutes />;
    }
    return null;
}

export default App;
