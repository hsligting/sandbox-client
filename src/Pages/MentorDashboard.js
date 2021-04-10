import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { MentorMenu } from "./Menu";
import useDashboardStyles from "../classStyles/useDashboardStyles";
import students from "../mockData/students";
import StudentCard from "../Organisms/StudentCard";
import RequestButton from "../Molecules/RequestButton";

export default function MentorDashboard() {
    const classes = useDashboardStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MentorMenu title={"Mentor Dashboard"} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Students
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Earn money by mentoring students and referring them to companies seeking candidates.
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.container} maxWidth="md">
                    <Grid container spacing={4}>
                        {students.map((student, index) => (
                            <StudentCard classes={classes} student={student} index={index} Button={RequestButton} />
                        ))}
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
