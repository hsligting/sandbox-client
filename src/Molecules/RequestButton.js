import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const RequestButton = () => {
    const [pending, setPending] = useState(false);
    return (
        <Button
            variant="contained"
            color={pending ? "gray" : "primary"}
            fullWidth
            onClick={() => setPending((prevState) => !prevState)}
        >
            {pending ? "Pending" : "Request"}
        </Button>
    );
};

export default RequestButton;
