import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "./Chart";
import { MentorMenu } from "./Menu";
import { Dashboard } from "@material-ui/icons";
import CustomTable from "../Organisms/CustomTable";
import students from "../mockData/students";
import TotalBonus from "../Organisms/TotalBonus";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: "none",
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column",
    },
    fixedHeight: {
        height: 240,
    },
}));

const menuItems = [
    { text: "Dashboard", Icon: Dashboard },
    { text: "Dashboard", Icon: Dashboard },
    { text: "Dashboard", Icon: Dashboard },
];

function createData(time, amount) {
    return { time, amount };
}

const data = [
    createData("Aug, 2020", 0),
    createData("Sep, 2020", 300),
    createData("Oct, 2020", 600),
    createData("Nov, 2020", 800),
    createData("Dec, 2020", 1500),
    createData("Jan, 2021", 2000),
    createData("Feb, 2021", 2400),
    createData("Mar, 2021", 2400),
    createData("Apr, 2021", undefined),
];

export default function MentorProfile() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MentorMenu title={"Profile"} menuItems={menuItems} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Chart title={"Referral Bonus to Date"} label={"Bonus ($)"} data={data} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <TotalBonus />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <CustomTable
                                    title={"Students"}
                                    rows={[
                                        {
                                            name: "Harrison Sligting",
                                            school: "Brigham Young",
                                            major: "Computer Science",
                                            grade: "Junior",
                                            gpa: 4.0,
                                            industry: "Software Engineering",
                                            bio: "All I do is code code code no matter what.",
                                        },
                                        ...students.slice(4, 6),
                                    ]}
                                    columns={[
                                        { label: "Name", key: "name" },
                                        { label: "School", key: "school" },
                                        { label: "Major", key: "major" },
                                        { label: "Industry", key: "industry" },
                                        { label: "Grade", key: "grade" },
                                        { label: "GPA", key: "gpa" },
                                    ]}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
