import React from "react";
import clsx from "clsx";
import propTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  CssBaseline,
  Menu,
  MenuItem,
  Button,
  Hidden,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { useAuthContext } from "../../../context/authContext";
import Breadcrumbs from "../../Breadcrumbs";

import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  headerIcon: {
    backgroundColor: (props) =>
      !props.paid ? "#fff" : theme.palette.background.headerIcon,
    // flexGrow: 1,
  },
}));

const Header = ({
  open,
  isMobileOpen,
  handleDrawerToggle,
  handleMobileDrawerToggle,
}) => {
  const location = useLocation();
  const paid =
    location.pathname === "/pro-package" || location.pathname === "/checkout";
  const classes = useStyles({ paid: !paid });
  const { user, setUser } = useAuthContext();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isOpen = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" className={classes.appBar}>
        {/* <Toolbar> */}
        <Box display="flex" justifyContent="space-between">
          <Box display="flex">
            <Box
              py={4}
              width="200px"
              display="flex"
              className={classes.headerIcon}
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h6"
                style={{ color: !paid ? "#fff" : "#002A46" }}
              >
                My Lab
              </Typography>
            </Box>
            <Box
              ml={5}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Breadcrumbs />
            </Box>
          </Box>

          {/* </Toolbar> */}
        </Box>
      </AppBar>
    </>
  );
};

Header.propTypes = {
  open: propTypes.bool.isRequired,
  isMobileOpen: propTypes.bool.isRequired,
  handleDrawerToggle: propTypes.func.isRequired,
  handleMobileDrawerToggle: propTypes.func.isRequired,
};

export default Header;
