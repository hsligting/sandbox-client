import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

const BulletPoint = ({ children, label }) => {
    return (
        <Box display={"flex"} flexDirection={"column"} alignContent={"center"}>
            <Typography variant={"subtitle"} color={"primary"}>
                {label}:
            </Typography>
            <Typography variant={"subtitle"}>{children}</Typography>
        </Box>
    );
};

export default BulletPoint;
