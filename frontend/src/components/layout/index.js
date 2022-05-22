import React, { useState } from "react";
import propTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Box } from "@material-ui/core";
import Header from "./header";
import SideBar from "./sidebar";

const drawerWidth = 200;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "block",
    width: "100%",
    height: "90%",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#E5E5E5",
    height: "100%",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
    marginTop: "60px",
  },
}));

const MainLayOut = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  const handleMobileDrawerToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className={classes.root}>
      <Header
        open={open}
        isMobileOpen={isMobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        handleMobileDrawerToggle={handleMobileDrawerToggle}
      />
      <SideBar
        open={open}
        isMobileOpen={isMobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        handleMobileDrawerToggle={handleMobileDrawerToggle}
      />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Box mx="50px" height="100%">
          {children}
        </Box>
      </main>
    </div>
  );
};

MainLayOut.propTypes = {
  children: propTypes.node,
};

MainLayOut.defaultProps = {
  children: {},
};

export default MainLayOut;
