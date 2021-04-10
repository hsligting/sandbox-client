import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import BulletPoint from "../Molecules/BulletPoint";

const MentorCard = ({ classes, mentor, index, Button }) => {
    return (
        <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={mentor.imgUrl} title="Image title" />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {mentor.name}
                    </Typography>
                    <Typography>{mentor.bio}</Typography>
                    <Box style={{ paddingRight: 10, paddingTop: 6, paddingBottom: 12 }}>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                            <BulletPoint label={"Rating"}>{mentor.rating}/5</BulletPoint>
                            <BulletPoint label={"Ratings"}>{mentor.ratings}</BulletPoint>
                            <BulletPoint label={"Experience"}>{mentor.experience}/yrs.</BulletPoint>
                        </Box>
                        <BulletPoint label={"Industry"}>{mentor.industry}</BulletPoint>
                    </Box>
                    <Button />
                </CardContent>
            </Card>
        </Grid>
    );
};

export default MentorCard;
