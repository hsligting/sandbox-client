import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { MentorMenu } from "./Menu";
import StudentCard from "../Organisms/StudentCard";
import AcceptDeclineButton from "../Molecules/AcceptDeclineButton";
import useDashboardStyles from "../classStyles/useDashboardStyles";

const cards = [
    {
        name: "Harrison Sligting",
        school: "Brigham Young",
        major: "Computer Science",
        grade: "Junior",
        gpa: 4.0,
        industry: "Software Engineering",
        bio: "All I do is code code code no matter what.",
        imgUrl: "http://www.gstatic.com/tv/thumb/persons/235135/235135_v9_ba.jpg",
    },
];

export default function MentorPendingRequests() {
    const classes = useDashboardStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MentorMenu title={"Pending Requests"} />
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
                    <Grid container spacing={4}>
                        {cards.map((student, index) => (
                            <StudentCard
                                classes={classes}
                                index={index}
                                student={student}
                                Button={AcceptDeclineButton}
                            />
                        ))}
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
