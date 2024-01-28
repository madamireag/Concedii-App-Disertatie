import React from "react";
import { makeStyles } from "@material-ui/core";
import employeeHeaderStyle from "../employee/styles/employeeHeaderStyle";

const useStyles = makeStyles(employeeHeaderStyle);

function MyProfileHeader({ handleClick }) {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <h1 className={classes.title}>Datele Mele</h1>
    </div>
  );
}

export default MyProfileHeader;
