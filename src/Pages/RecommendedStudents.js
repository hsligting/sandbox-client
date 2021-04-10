import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { CompanyMenu } from "./Menu";
import useDashboardStyles from "../classStyles/useDashboardStyles";
import students from "../mockData/students";
import StudentCard from "../Organisms/StudentCard";
import AcceptDeclineButton from "../Molecules/AcceptDeclineButton";

export default function RecommendedStudents() {
    const classes = useDashboardStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <CompanyMenu title={"Recommended Students"} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Recommendations
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.container} maxWidth="md">
                    <Grid container spacing={4}>
                        {students.map((student, index) => (
                            <StudentCard
                                classes={classes}
                                index={index}
                                Button={AcceptDeclineButton}
                                student={student}
                            />
                        ))}
                    </Grid>
                </Container>
            </main>
        </div>
    );
}
