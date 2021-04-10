import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { StudentMenu } from "./Menu";
import MentorCard from "../Organisms/MentorCard";
import AcceptDeclineButton from "../Molecules/AcceptDeclineButton";
import mentors from "../mockData/mentors";
import useDashboardStyles from "../classStyles/useDashboardStyles";

export default function StudentPendingRequests() {
    const classes = useDashboardStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <StudentMenu title={"Pending Requests"} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Pending Requests
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.container} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {mentors.map((mentor, index) => (
                            <MentorCard Button={AcceptDeclineButton} mentor={mentor} index={index} classes={classes} />
                        ))}
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
