import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import { Person } from "@material-ui/icons";
import { routerHistory } from "../routerHistory";

export const MenuList = ({ menuItems }) => {
    return (
        <div>
            {menuItems.map((menuItem) => {
                return <MenuItem Icon={menuItem.Icon} text={menuItem.text} link={menuItem.link} />;
            })}
        </div>
    );
};

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Pending Requests" />
        </ListItem>
    </div>
);

const MenuItem = ({ Icon, text, link }) => {
    return (
        <ListItem button onClick={() => routerHistory.push("/home" + link)}>
            <ListItemIcon>
                <Icon />
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItem>
    );
};
