import { React, useEffect, useReducer, useState } from "react";
import AddHolidayForm from "./AddHolidayForm";
import { Grid, IconButton, makeStyles } from "@material-ui/core";
import iconBack from "../../assets/img/iconBack.svg";
import formStyle from "../../assets/jss/components/formStyle";
import { addHolidayReducer, initialState } from "./addHolidayReducer";
import axios from "axios";
const useStyles = makeStyles(formStyle);
const currentYear = new Date().getFullYear();
const getHolidayTypes = async () => {
  var url = process.env.REACT_APP_API_ROUTE + "/AddHoliday/GetHolidayTypes";
  var resp = await axios.get(url);
  return resp;
};
const getReplacements = async (startDate, endDate) => {
  const url = process.env.REACT_APP_API_ROUTE + "/AddHoliday/GetEmployees";
  var resp = await axios.get(url, {
    params: {
      startDate: startDate,
      endDate: endDate,
    },
  });
  return resp;
};
const getNoOfFreeDaysPerType = async (employeeId, currentYear) => {
  const url = process.env.REACT_APP_API_ROUTE + "/AddHoliday/GetNoOfDays";
  var resp = await axios.get(url, {
    params: {
      employeeId: employeeId,
      currentYear: currentYear,
    },
  });
  return resp;
};
function AddHolidayRequestContainer() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(addHolidayReducer, initialState);
  const dispatchWrapper = (propertyName, value) => {
    dispatch({ type: "OnPropertyChange", propertyName, value });
  };

  const [holidayTypes, setHolidayTypes] = useState();
  const [replacements, setReplacements] = useState();
  const [noOfFreeDaysPerType, setNoOfFreeDaysPerType] = useState();
  useEffect(() => {
    async function initializeHolidayTypes() {
      const result = await getHolidayTypes();
      setHolidayTypes(result);
      return result;
    }
    async function initializeReplacements() {
      const result = await getReplacements(state.startDate, state.endDate);
      setReplacements(result);
      return result;
    }
    async function initializeNoOfFreeDaysPerType() {
      const result = await getNoOfFreeDaysPerType(
        localStorage.getItem("userId"),
        currentYear
      );
      setNoOfFreeDaysPerType(result);
      return result;
    }
    initializeHolidayTypes();
    initializeReplacements();
    initializeNoOfFreeDaysPerType();
  }, [state.endDate, state.startDate]);
  const insertHoliday = async () => {
    const holiday = {
      dataInceput: state.startDate,
      dataSfarsit: state.endDate,
      totalZileDisponibile: state.totalZileDisponibile,
      totalZileSolicitate: state.totalZileSolicitate,
      tipConcediuId: state.holidayTypeId,
      inlocuitorId: state.replacementId,
      comentarii: state.comments,
      angajatId: localStorage.getItem("userId"),
      stareConcediuId: 3,
    };
    await axios
      .post("http://localhost:7080/api/AddHoliday/InsertHoliday", holiday)
      .then((res) => console.log(res));
  };
  return (
    <Grid item container xs={12} className={classes.card}>
      <div className={classes.header}>
        <IconButton className={classes.buttonDots} aria-label="options">
          <img className={classes.icon} alt="iconBack" src={iconBack} />
        </IconButton>
      </div>
      <AddHolidayForm
        classes={classes}
        dispatchWrapper={dispatchWrapper}
        holidayTypes={holidayTypes ? holidayTypes?.data : null}
        replacements={replacements ? replacements?.data : null}
        state={state}
        noOfFreeDaysPerType={
          noOfFreeDaysPerType ? noOfFreeDaysPerType?.data : null
        }
        insertHoliday={insertHoliday}
      />
    </Grid>
  );
}

export default AddHolidayRequestContainer;
