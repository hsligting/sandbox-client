import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";
import students from "../mockData/students";

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders() {
    const classes = useStyles();

    const studentsWithHarrison = [
        {
            name: "Harrison Sligting",
            school: "Brigham Young",
            major: "Computer Science",
            grade: "Junior",
            gpa: 4.0,
            industry: "Software Engineering",
            bio: "All I do is code code code no matter what.",
        },
        ...students.slice(4, 6),
    ];
    return (
        <React.Fragment>
            <Title>Students</Title>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>School</TableCell>
                        <TableCell>Major</TableCell>
                        <TableCell>Industry</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell align={"right"}>GPA</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {studentsWithHarrison.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.school}</TableCell>
                            <TableCell>{row.major}</TableCell>
                            <TableCell>{row.industry}</TableCell>
                            <TableCell>{row.grade}</TableCell>
                            <TableCell align={"right"}>{row.gpa.toPrecision(3)}</TableCell>
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
}
