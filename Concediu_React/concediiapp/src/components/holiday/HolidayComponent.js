import React from "react";
import { Grid, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import gridStyle from "../../assets/jss/components/HolidayGrid";
import { makeStyles } from "@material-ui/core";

function HolidayComponent(props) {
  const { holidays } = props;
  const useStyles = makeStyles(gridStyle);
  const classes = useStyles();

  return (
    <Grid container direction="row" className={classes.container}>
      {holidays.map((element) => (
        <Grid
          container
          item
          xs={12}
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.card}
          key={element.id}
        >
          <Grid item xs={3} className={classes.lblPerioada}>
            Perioada
          </Grid>
          <Grid item xs={3} className={classes.lblInlocuitor}>
            Inlocuitor
          </Grid>
          <Grid item xs={3} className={classes.lblTip}>
            Tip
          </Grid>
          <Grid item xs={3} className={classes.lblStare}>
            Status
          </Grid>
          <Grid item xs={3} className={classes.perioada}>
            {element.dataInceput.substring(0, 10) +
              "=>" +
              element.dataSfarsit.substring(0, 10)}
          </Grid>

          <Grid item xs={3} className={classes.inlocuitor}>
            {element.inlocuitor.nume + " " + element.inlocuitor.prenume}
          </Grid>
          <Grid item xs={3} className={classes.tipConcediu}>
            {element.tipConcediu.nume}
          </Grid>
          <Grid item xs={3} className={classes.stare}>
            {element.stareConcediu?.nume}
          </Grid>
          {element.stareConcediu?.nume.toUpperCase() === "RESPINS" ? (
            <Grid item xs={3} className={classes.motivRespingere}>
              {"Motiv Respingere:" + element.motivRespingere}
            </Grid>
          ) : (
            <Typography></Typography>
          )}
        </Grid>
      ))}
    </Grid>
  );
}
HolidayComponent.propTypes = {
  holidays: PropTypes.array,
};
export default HolidayComponent;
