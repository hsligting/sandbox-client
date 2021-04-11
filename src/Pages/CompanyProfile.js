import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { CompanyMenu } from "./Menu";
import Title from "./Title";
import Typography from "@material-ui/core/Typography";
import { Box, Button } from "@material-ui/core";
import { routerHistory } from "../routerHistory";
import CustomTable from "../Organisms/CustomTable";
import useDashboardStyles from "../classStyles/useDashboardStyles";
import Chart from "./Chart";
import createChartData from "../utilities/createChartData";

const data = [
    createChartData("Aug, 2020", 0),
    createChartData("Sep, 2020", 10),
    createChartData("Oct, 2020", 24),
    createChartData("Nov, 2020", 26),
    createChartData("Dec, 2020", 48),
    createChartData("Jan, 2021", 60),
    createChartData("Feb, 2021", 62),
    createChartData("Mar, 2021", 62),
    createChartData("Apr, 2021", undefined),
];

const NextStep = () => {
    return (
        <>
            <Title>Cumulative Listing Views</Title>
            <Typography component="p" variant="h4">
                62
            </Typography>
            <Title>Total Listings</Title>
            <Typography component="p" variant="h4">
                4
            </Typography>

            <Box display={"flex"} alignItems={"flex-end"} style={{ height: "100%" }}>
                <Button variant="contained" color={"primary"} fullWidth>
                    Create Listing
                </Button>
            </Box>
        </>
    );
};

const TableButton = () => {
    return (
        <Button variant={"contained"} size={"small"} onClick={() => routerHistory.push("/home/recommended-students")}>
            View Referrals
        </Button>
    );
};

const rows = [
    {
        jobTitle: "Product Manager",
        numberOfReferrals: 18,
        industry: "Product Management",
        Button: <TableButton />,
    },
    {
        jobTitle: "Software Design",
        numberOfReferrals: 21,
        industry: "Design",
        Button: <TableButton />,
    },
    {
        jobTitle: "Software Engineer",
        numberOfReferrals: 6,
        industry: "Software Engineering",
        Button: <TableButton />,
    },
    {
        jobTitle: "Data Scientist",
        numberOfReferrals: 12,
        industry: "Data Analytics",
        Button: <TableButton />,
    },
];

export default function CompanyProfile() {
    const classes = useDashboardStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <CompanyMenu title={"Profile"} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Chart title={"Cumulative Job Listing Views"} data={data} label={"Number of Views"} />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <NextStep />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <CustomTable
                                    title={"Current Job Listings"}
                                    rows={rows}
                                    columns={[
                                        { label: "Job Title", key: "jobTitle" },
                                        { label: "Industry", key: "industry" },
                                        { label: "Total Referrals", key: "numberOfReferrals" },
                                        { label: "", key: "Button" },
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
