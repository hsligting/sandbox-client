import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Deposits from "./Deposits";
import Orders from "./Orders";
import Menu, { MentorMenu, StudentMenu } from "./Menu";
import { Dashboard } from "@material-ui/icons";
import Title from "./Title";
import { Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import mentors from "../mockData/mentors";

function createData(time, amount) {
    return { time, amount };
}

const data = [
    createData("Aug, 2020", 0),
    createData("Sep, 2020", 10),
    createData("Oct, 2020", 24),
    createData("Nov, 2020", 26),
    createData("Dec, 2020", 48),
    createData("Jan, 2021", 60),
    createData("Feb, 2021", 62),
    createData("Mar, 2021", 62),
    createData("Apr, 2021", undefined),
];

function Chart() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Title>My Career Progress to Date</Title>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 16,
                        right: 16,
                        bottom: 0,
                        left: 24,
                    }}
                >
                    <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
                    <YAxis
                        stroke={theme.palette.text.secondary}
                        tickFormatter={(tick) => `${tick}%`}
                        ticks={[0, 25, 50, 75, 100]}
                    >
                        <Label
                            angle={270}
                            position="left"
                            style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
                        >
                            Progress (%)
                        </Label>
                    </YAxis>
                    <Line type="monotone" dataKey="amount" stroke={theme.palette.primary.main} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}

function NextStep() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Next Step</Title>
            <Typography component="p" variant="h4">
                Review Resume with Mentor
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                by 17 April, 2021
            </Typography>
            <Typography className={classes.depositContext}>+5%</Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View details
                </Link>
            </div>
        </React.Fragment>
    );
}

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
    depositContext: {
        flex: 1,
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
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

const menuItems = [
    { text: "Dashboard", Icon: Dashboard },
    { text: "Dashboard", Icon: Dashboard },
    { text: "Dashboard", Icon: Dashboard },
];

const rows = mentors.slice(4, 6);

function preventDefault(event) {
    event.preventDefault();
}

function Mentors() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Mentors</Title>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>School</TableCell>

                        <TableCell>Rating</TableCell>
                        <TableCell>Ratings</TableCell>
                        <TableCell>Experience</TableCell>
                        <TableCell>Industry</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.school}</TableCell>

                            <TableCell>{row.rating}/5</TableCell>
                            <TableCell>{row.ratings}</TableCell>
                            <TableCell>{row.experience}/yrs.</TableCell>
                            <TableCell>{row.industry}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more mentors
                </Link>
            </div>
        </React.Fragment>
    );
}

export default function StudentProfile() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <StudentMenu title={"Profile"} menuItems={menuItems} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        {/* Chart */}
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Chart />
                            </Paper>
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <NextStep />
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Mentors />
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
