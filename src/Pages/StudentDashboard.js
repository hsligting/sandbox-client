import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import { StudentMenu } from "./Menu";
import useDashboardStyles from "../classStyles/useDashboardStyles";
import mentors from "../mockData/mentors";
import MentorCard from "../Organisms/MentorCard";
import RequestButton from "../Molecules/RequestButton";

export default function StudentDashboard() {
    const classes = useDashboardStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <StudentMenu title={"Student Dashboard"} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Mentors
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Request to be mentored by industry professionals who are passionate about guiding your
                            career and helping you land the perfect job.
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.container} maxWidth="md">
                    <Grid container spacing={4}>
                        {mentors.map((mentor, index) => (
                            <MentorCard mentor={mentor} classes={classes} index={index} Button={RequestButton} />
                        ))}
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
