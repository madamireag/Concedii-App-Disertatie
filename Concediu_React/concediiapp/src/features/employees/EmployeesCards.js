import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import EmployeeCard from "./EmployeeCard";
import { makeStyles } from "@material-ui/core/styles";
import employeesCardsStyle from "./styles/employeesCardsStyle";

const useStyles = makeStyles(employeesCardsStyle);

function EmployeesCards({ employees, loading }) {
  const classes = useStyles();

  return (
    <Grid className={classes.cardsGrid} container spacing={4}>
      {employees.map((employee, index) => (
        <Grid item sm={"auto"} key={index}>
          <EmployeeCard employee={employee} loading={loading} />
        </Grid>
      ))}
    </Grid>
  );
}

export default EmployeesCards;
