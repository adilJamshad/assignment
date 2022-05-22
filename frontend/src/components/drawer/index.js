import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Typography,
} from "@material-ui/core";

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.background.drawer,
  },
  drawerContainer: {
    overflow: "auto",
  },
}));

const SideDrawer = ({
  open,
  variant,
  handleDrawerToggle,
  drawerItems,
  location,
}) => {
  // const {
  //   history,
  //   location: { pathname },
  // } = props;
  // const pathnames = pathname.split('/').filter((x) => x);
  const classes = useStyles();

  return (
    <>
      <Drawer
        open={open}
        variant={variant}
        onClose={handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {drawerItems.map((item) => (
              <ListItem
                button
                color="#003558"
                key={item.text}
                component={Link}
                to={item.link}
              >
                <ListItemIcon style={{ color: "#fff", minWidth: "35px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  style={{ color: "#fff !important" }}
                  primary={
                    <Typography type="body2" style={{ color: "#fff" }}>
                      {item.text}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

SideDrawer.propTypes = {
  open: propTypes.bool,
  variant: propTypes.string,
  handleDrawerToggle: propTypes.func,
  drawerItems: propTypes.instanceOf(Array),
};

SideDrawer.defaultProps = {
  open: true,
  variant: "persistent",
  handleDrawerToggle: propTypes.func,
  drawerItems: [],
};
export default SideDrawer;
