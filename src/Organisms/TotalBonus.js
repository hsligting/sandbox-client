import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "../Atoms/Title";

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

const TotalBonus = () => {
    const classes = useStyles();
    return (
        <>
            <Title>Total Bonus</Title>
            <Typography component="p" variant="h4">
                $3,024.00
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                on 10 April, 2021
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View details
                </Link>
            </div>
        </>
    );
};

export default TotalBonus;
