import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "../Atoms/Title";

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

const CustomTable = ({ columns, rows, title }) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>{title}</Title>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        {columns.map(({ label }, index) => (
                            <TableCell key={index}>{label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            {columns.map(({ key }, index) => (
                                <TableCell key={index}>{row[key]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more students
                </Link>
            </div>
        </React.Fragment>
    );
};

export default CustomTable;
