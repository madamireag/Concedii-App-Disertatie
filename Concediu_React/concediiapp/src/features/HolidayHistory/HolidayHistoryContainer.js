import React, { useEffect, useReducer } from "react";

import HolidayComponent from "../../components/holiday/HolidayComponent";
import { Grid, makeStyles } from "@material-ui/core";
import cardContainer from "../../assets/jss/components/cardContainer";
import axios from "axios";

import { useState } from "react";
const getHolidayHistory = async (Id) => {
  var url =
    process.env.REACT_APP_API_ROUTE + "/HolidaysHistory/GetHolidayHistory";
  var resp = await axios.get(url, {
    params: {
      Id: Id,
    },
  });
  return resp;
};
function HolidayHistoryContainer() {
  const useStyles = makeStyles(cardContainer);
  const classes = useStyles();

  const [results, setResults] = useState();
  useEffect(() => {
    async function initializeHolidayHistory() {
      const result = await getHolidayHistory(localStorage.getItem('userId'));
      setResults(result);
      return result;
    }
    initializeHolidayHistory();
   
  }, []);

  return (
    <Grid item container xs={12} className={classes.card}>
      <h1 className={classes.title}>Holidays</h1>
      <HolidayComponent holidays={results ? results?.data : []} />
    </Grid>
  );
}

export default HolidayHistoryContainer;
