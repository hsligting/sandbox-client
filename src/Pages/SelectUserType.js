import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import StarIcon from "@material-ui/icons/StarBorder";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { LocalLibrary, People, Business } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { slices } from "../redux";
import { routerHistory } from "../routerHistory";
import { Logo } from "../items";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    "@global": {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: "none",
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: "wrap",
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    heroContent: {
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
        backgroundColor: theme.palette.type === "light" ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
        display: "flex",
        justifyContent: "center",
        alignItems: "baseline",
        marginBottom: theme.spacing(2),
    },
    footer: {
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up("sm")]: {
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },
}));

const tiers = [
    {
        title: "Student",
        description: ["Learn from industry professionals", "Track your career progress", "Be referred by mentors"],
        buttonText: "Continue as student",
        buttonVariant: "contained",
        Icon: LocalLibrary,
        userType: 0,
    },
    {
        title: "Mentor",
        description: ["Guide a diverse set of students", "Refer students to employers", "Earn money with references"],
        buttonText: "Continue as mentor",
        buttonVariant: "contained",
        Icon: People,
        userType: 1,
    },
    {
        title: "Employer",
        description: ["Post job listings", "Work with mentors", "Interview referred candidates"],
        buttonText: "Continue as employer",
        buttonVariant: "contained",
        Icon: Business,
        userType: 2,
    },
];

export default function SelectUserType() {
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleButtonClick = (userType) => {
        dispatch(slices.currentUser.actions.set({ type: userType }));
        routerHistory.push("/home/dashboard");
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" component="main" className={classes.heroContent}>
                <Box display={"flex"} justifyContent={"center"} style={{ paddingBottom: 20 }}>
                    <Logo />
                </Box>
                <Typography variant="h5" align="center" color="textSecondary" component="p">
                    Connecting and referring students, mentors, and employers reliably.
                </Typography>
            </Container>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier) => (
                        <Grid item key={tier.title} xs={12} sm={tier.title === "Enterprise" ? 12 : 6} md={4}>
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    titleTypographyProps={{ align: "center" }}
                                    subheaderTypographyProps={{ align: "center" }}
                                    action={tier.title === "Pro" ? <StarIcon /> : null}
                                    className={classes.cardHeader}
                                />
                                <CardContent>
                                    <div className={classes.cardPricing}>
                                        <tier.Icon style={{ width: 60, height: 60 }} />
                                    </div>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography component="li" variant="subtitle1" align="center" key={line}>
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        fullWidth
                                        variant={tier.buttonVariant}
                                        color="primary"
                                        onClick={() => handleButtonClick(tier.userType)}
                                    >
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    );
}
