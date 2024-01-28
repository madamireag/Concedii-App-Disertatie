import React, { useState, useEffect } from "react";
import iconDots from "../../assets/img/iconDots.svg";
import iconPhone from "../../assets/img/iconPhone.svg";
import iconEmail from "../../assets/img/iconEmail.svg";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import employeeCardStyle from "./styles/employeeCardStyle";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(employeeCardStyle);

function EmployeeCard({ employee, loading, permissions }) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  var imgURL = `data:image/*;base64,${employee.poza}`;
  let isAdmin = localStorage.getItem("isAdmin");
  const [isAdminLocal, setIsAdminLocal] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  useEffect(() => {
    if (isAdmin === "true") setIsAdminLocal(true);
    else setIsAdminLocal(false);
  }, [isAdmin]);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleViewUser = () => {
    navigate(`/app/employee/${employee.id}`);
  };


  return (
    !loading && (
      <Paper className={classes.card}>
        {isAdminLocal && (
          <>
            <IconButton
              className={classes.buttonDots}
              aria-label="options"
              onClick={handleClick}
            >
              <img className={classes.icon} alt="iconDots" src={iconDots} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              elevation={2}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <MenuItem onClick={handleViewUser}>View Profile</MenuItem>
            </Menu>
          </>
        )}
        <CardMedia
          className={classes.image}
          component="img"
          alt="User"
          height="140"
          image={imgURL}
          title="User"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.name}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {employee.nume + " " + employee.prenume}
          </Typography>
          <Typography className={classes.job} component="p">
            {employee.job}
          </Typography>
          <div className={classes.contact}>
            <div className={classes.contactItem}>
              <img
                className={classes.contactIcon}
                alt="iconPhone"
                src={iconPhone}
              />
              <span className={classes.contactText}>{employee.nrTelefon}</span>
            </div>
            <div>
              <img
                className={classes.contactIcon}
                alt="iconPhone"
                src={iconEmail}
              />
              <span className={classes.contactText}>{employee.email}</span>
            </div>
          </div>
        </CardContent>
      </Paper>
    )
  );
}

export default EmployeeCard;
