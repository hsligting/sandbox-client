import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";

const AcceptDeclineButton = () => {
    const [accepted, setAccepted] = useState(false);
    return accepted ? (
        <Button variant="contained" fullWidth color={"primary"} onClick={() => setAccepted((prevState) => !prevState)}>
            Accepted!
        </Button>
    ) : (
        <ButtonGroup fullWidth>
            <Button variant="contained" color={"primary"} onClick={() => setAccepted((prevState) => !prevState)}>
                Accept
            </Button>
            <Button variant="contained">Decline</Button>
        </ButtonGroup>
    );
};

export default AcceptDeclineButton;
