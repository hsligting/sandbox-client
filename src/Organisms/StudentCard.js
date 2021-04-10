import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import BulletPoint from "../Molecules/BulletPoint";

const StudentCard = ({ classes, student, index, Button }) => {
    return (
        <Grid item key={index} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={student.imgUrl} title="Image title" />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {student.name}
                    </Typography>
                    <Typography>{student.bio}</Typography>
                    <Box style={{ paddingRight: 10, paddingTop: 6, paddingBottom: 12 }}>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                            <BulletPoint label={"GPA"}>{student.gpa.toPrecision(3)}</BulletPoint>
                            <BulletPoint label={"Grade"}>{student.grade}</BulletPoint>
                            <BulletPoint label={"School"}>{student.school}</BulletPoint>
                        </Box>
                        <BulletPoint label={"Major"}>{student.major}</BulletPoint>
                        <BulletPoint label={"Industry"}>{student.industry}</BulletPoint>
                    </Box>
                    <Button />
                </CardContent>
            </Card>
        </Grid>
    );
};

export default StudentCard;
