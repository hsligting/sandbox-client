import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";
import { MentorMenu } from "./Menu";
import useDashboardStyles from "../classStyles/useDashboardStyles";

const cards = [
    {
        companyName: "Google",
        jobTitle: "Software Engineer",
        description: "Develop the next big app for Google. No React, just Angular.",
        industry: "Software Engineering",
        imgUrl:
            "data:image/png;base64,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",
    },
];

export default function MentorJobListings() {
    const classes = useDashboardStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <MentorMenu title={"Job Listings"} />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Listings
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Refer your students to companies where they would best fit. Earn money if they remain
                            employed for six months.
                        </Typography>
                    </Container>
                </div>
                <Container className={classes.container} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map(({ email, companyName, description, industry, jobTitle, imgUrl }, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image={imgUrl} title="Image title" />
                                    <CardContent className={classes.cardContent}>
                                        <Typography variant="h5">{jobTitle}</Typography>
                                        <Typography
                                            gutterBottom
                                            variant="subtitle1"
                                            style={{ fontSize: "16px" }}
                                            color={"primary"}
                                        >
                                            {companyName}
                                        </Typography>
                                        <Typography>{description}</Typography>
                                        <Box style={{ paddingRight: 10, paddingTop: 6, paddingBottom: 12 }}>
                                            <BulletPoint label={"Industry"}>{industry}</BulletPoint>
                                        </Box>
                                        <Button variant="contained" color={"primary"} fullWidth>
                                            Refer Student
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </div>
    );
}

const BulletPoint = ({ children, label }) => {
    return (
        <Box display={"flex"} flexDirection={"column"} alignContent={"center"}>
            <Typography variant={"subtitle2"}>{label}:</Typography>
            <Typography variant={"subtitle"}>{children}</Typography>
        </Box>
    );
};
