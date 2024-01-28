import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import {
  Menu as MenuIcon,
  Person as AccountIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";
// styles
import useStyles from "./styles";
import avatar_default from "../../assets/img/default-avatar.png";
// components
import { Badge, Typography } from "../Wrappers/Wrappers";
import Notification from "../Notification/Notification";
import AddToPhotosIcon from "@material-ui/icons/AddToPhotos";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const options = [
  { id: 0, color: "warning", message: "Adauga cerere concediu", type: "add" },
];

export default function Header(props) {
  var classes = useStyles();
  const navigate = useNavigate();
  // global
  var layoutState = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [notificationsMenu, setNotificationsMenu] = useState(null);
  var [profileMenu, setProfileMenu] = useState(null);

  console.log(localStorage);

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          onClick={() => toggleSidebar(layoutDispatch)}
          className={classNames(
            classes.headerMenuButton,
            classes.headerMenuButtonCollapse
          )}
        >
          {layoutState.isSidebarOpened ? (
            <ArrowBackIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse
                ),
              }}
            />
          ) : (
            <MenuIcon
              classes={{
                root: classNames(
                  classes.headerIcon,
                  classes.headerIconCollapse
                ),
              }}
            />
          )}
        </IconButton>
        <Typography variant="h6" weight="medium" className={classes.logotype}>
          Aplicatie concedii
        </Typography>
        <div className={classes.grow} />
        <IconButton
          color="inherit"
          aria-haspopup="true"
          aria-controls="mail-menu"
          onClick={(e) => {
            setNotificationsMenu(e.currentTarget);
          }}
          className={classes.headerMenuButton}
        >
          <Badge overlap="rectangular" badgeContent={null} color="warning">
            <AddToPhotosIcon classes={{ root: classes.headerIcon }} />
          </Badge>
        </IconButton>
        <IconButton
          aria-haspopup="true"
          color="inherit"
          className={classes.headerMenuButton}
          aria-controls="profile-menu"
          onClick={(e) => setProfileMenu(e.currentTarget)}
        >
          <AccountIcon classes={{ root: classes.headerIcon }} />
        </IconButton>
        <Menu
          id="notifications-menu"
          open={Boolean(notificationsMenu)}
          anchorEl={notificationsMenu}
          onClose={() => setNotificationsMenu(null)}
          className={classes.headerMenu}
          disableAutoFocusItem
        >
          {options.map((option) => (
            <MenuItem
              key={option.id}
              onClick={() => {
                setNotificationsMenu(null);
                if (option.type === "add") navigate(`/app/addHoliday`);
              }}
              className={classes.headerMenuItem}
            >
              <Notification {...option} typographyVariant="inherit" />
            </MenuItem>
          ))}
        </Menu>
        <Menu
          id="profile-menu"
          open={Boolean(profileMenu)}
          anchorEl={profileMenu}
          onClose={() => {
            setProfileMenu(null);
          }}
          className={classes.headerMenu}
          classes={{ paper: classes.profileMenu }}
          disableAutoFocusItem
        >
          <div className={classes.profileMenuUser}>
            <Typography variant="h4" weight="medium">
              {localStorage.getItem("userName")}{" "}
              <img
                src={
                  localStorage.getItem("poza")
                    ? `data:image/*;base64,${localStorage.getItem("poza")}`
                    : avatar_default
                }
                className={classes.profilePhoto}
                alt="..."
              />
            </Typography>
          </div>
          <div className={classes.profileMenuUser}>
            <Typography
              className={classes.profileMenuLink}
              color="primary"
              onClick={() => {
                localStorage.clear();
                navigate(`/`);
                navigate(0);
              }}
            >
              Sign Out
            </Typography>
          </div>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
