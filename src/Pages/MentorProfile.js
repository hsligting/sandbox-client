import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "./Chart";
import { MentorMenu } from "./Menu";
import CustomTable from "../Organisms/CustomTable";
import students from "../mockData/students";
import TotalBonus from "../Organisms/TotalBonus";
import useDashboardStyles from "../classStyles/useDashboardStyles";
import createChartData from "../utilities/createChartData";

const data = [
    createChartData("Aug, 2020", 0),
    createChartData("Sep, 2020", 300),
    createChartData("Oct, 2020", 600),
    createChartData("Nov, 2020", 800),
    createChartData("Dec, 2020", 1500),
    createChartData("Jan, 2021", 2000),
    createChartData("Feb, 2021", 2400),
    createChartData("Mar, 2021", 2400),
    createChartData("Apr, 2021", undefined),
];

export default function MentorProfile() {
    const classes = useDashboardStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MentorMenu title={"Profile"} />
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
