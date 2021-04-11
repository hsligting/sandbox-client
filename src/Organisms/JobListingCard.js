import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import React from "react";
import BulletPoint from "../Molecules/BulletPoint";

const JobListingCard = ({ index, classes, listing }) => {
    return (
        <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={listing.imgUrl} title="Image title" />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h5">{listing.jobTitle}</Typography>
                    <Typography gutterBottom variant="subtitle1" style={{ fontSize: "16px" }} color={"primary"}>
                        {listing.companyName}
                    </Typography>
                    <Typography>{listing.description}</Typography>
                    <Box style={{ paddingRight: 10, paddingTop: 6, paddingBottom: 12 }}>
                        <BulletPoint label={"Industry"}>{listing.industry}</BulletPoint>
                    </Box>
                    <Button variant="contained" color={"primary"} fullWidth>
                        Refer Student
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default JobListingCard;
