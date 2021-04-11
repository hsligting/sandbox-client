import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { MenuList } from "../Organisms/listItems";
import React from "react";
import { Dashboard, People, Person, List as ListIcon } from "@material-ui/icons";
import useDashboardStyles from "../classStyles/useDashboardStyles";

const mentorMenuItems = [
    { text: "Dashboard", Icon: Dashboard, link: "/dashboard" },
    { text: "Profile", Icon: Person, link: "/profile" },
    { text: "Pending Requests", Icon: People, link: "/pending-requests" },
    { text: "Job Listings", Icon: ListIcon, link: "/job-listings" },
];

const studentMenuItems = [
    { text: "Dashboard", Icon: Dashboard, link: "/dashboard" },
    { text: "Profile", Icon: Person, link: "/profile" },
    { text: "Pending Requests", Icon: People, link: "/pending-requests" },
];

const companyMenuItems = [{ text: "Profile", Icon: Person, link: "/dashboard" }];

export const MentorMenu = ({ children, title }) => (
    <Menu menuItems={mentorMenuItems} title={title} children={children} />
);
export const StudentMenu = ({ children, title }) => (
    <Menu menuItems={studentMenuItems} title={title} children={children} />
);
export const CompanyMenu = ({ children, title }) => (
    <Menu menuItems={companyMenuItems} title={title} children={children} />
);

const Menu = ({ children, title, menuItems }) => {
    const classes = useDashboardStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        {title}
                    </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <MenuList menuItems={menuItems} />
                </List>
            </Drawer>
            {children}
        </>
    );
};
