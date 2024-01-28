import { React, useState, useReducer, useEffect } from "react";
import { Typography, TextField, Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { DashBoardReducer, initialState } from "./DashBoardReducer";
import axios from "axios";
import dashboard from "../../assets/jss/components/dashboard";
import { makeStyles } from "@material-ui/core/styles";
import ReactApexChart from "react-apexcharts";

const getHolidayTypes = async () => {
  var url = process.env.REACT_APP_API_ROUTE + "/AddHoliday/GetHolidayTypes";
  var resp = await axios.get(url);
  return resp;
};
const getNoOfHolidayPerStatus = async (employeeId) => {
  var url =
    process.env.REACT_APP_API_ROUTE + "/Dashboard/GetNoOfHolidaysPerStatus";
  var resp = await axios.get(url, {
    params: {
      employeeId: employeeId,
    },
  });
  return resp;
};
const getNoOfHolidayPerType = async (employeeId) => {
  var url =
    process.env.REACT_APP_API_ROUTE + "/Dashboard/GetNoofHolidaysPerType";
  var resp = await axios.get(url, {
    params: {
      employeeId: employeeId,
    },
  });
  return resp;
};
const GetNoOfHolidaysByHolidayTypeId = async (
  holidayTypeId,
  employeeId,
  currentYear
) => {
  const url =
    process.env.REACT_APP_API_ROUTE +
    "/Dashboard/GetNoOfHolidaysByHolidayTypeId";
  var resp = await axios.get(url, {
    params: {
      holidayTypeId: holidayTypeId,
      employeeId: employeeId,
      year: currentYear,
    },
  });
  return resp;
};
const GetNoOfHolidaysByHolidayStatusId = async (
  holidayStatusId,
  employeeId,
  currentYear
) => {
  const url =
    process.env.REACT_APP_API_ROUTE +
    "/Dashboard/GetNoOfHolidaysByHolidayStatusId";
  var resp = await axios.get(url, {
    params: {
      holidayStatusId: holidayStatusId,
      employeeId: employeeId,
      year: currentYear,
    },
  });
  return resp;
};
const getAllHolidayStatuses = async () => {
  const url = process.env.REACT_APP_API_ROUTE + "/Dashboard/GetHolidayStatuses";
  var resp = await axios.get(url);
  return resp;
};
const useStyles = makeStyles(dashboard);
function HomePage() {
  const classes = useStyles();
  const [holidayTypes, setHolidayTypes] = useState();
  const [allHolidayStatuses, setAllHolidayStatuses] = useState();

  const [noOfFreeDaysPerType, setNoOfHolidayDaysPerType] = useState(0);
  const [noOfFreeDaysPerStatus, setNoOfFreeDaysPerStatus] = useState(0);
  const [, dispatch] = useReducer(DashBoardReducer, initialState);

  const dispatchWrapper = (propertyName, value) => {
    dispatch({ type: "OnPropertyChange", propertyName, value });
  };
  const [noOfHolidaysPerType, setNoOfHolidaysPerType] = useState();
  const [typeLabels, setTypeLabels] = useState();
  const [holidayStatuses, setHolidayStatuses] = useState();
  const [noOfHolidaysPerStatus, setNoOfHolidaysPerStatus] = useState();

  var series = noOfHolidaysPerStatus;
  var options = {
    labels: holidayStatuses ?? [],
    chart: {
      type: "donut",
      width: "30%",
      height: "50%",
    },
    legend: { show: true },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {},
        },
      },
    ],
  };
  var options2 = {
    labels: typeLabels ?? [],
    chart: {
      type: "donut",
      width: "30%",
      height: "50%",
    },
    legend: { show: true },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {},
        },
      },
    ],
  };
  const afisare = (valoare) => {
    if (valoare === undefined || valoare < 0) return "";
    if (valoare === 1) return " zi";
    if (valoare >= 0) return " zile";
  };
  const verificaValoare = (valoare) => {
    if (valoare === undefined) return "";
    else {
      if (Number.isNaN(valoare) || valoare === null) return "";
    }
    return valoare;
  };
  useEffect(() => {
    async function initializeHolidaysPerStatus() {
      const response = await getNoOfHolidayPerStatus(
        localStorage.getItem("userId")
      );
      setHolidayStatuses(Object.keys(response.data));
      setNoOfHolidaysPerStatus(Object.values(response.data));
    }
    initializeHolidaysPerStatus();

    async function initializeHolidayTypes() {
      getHolidayTypes().then((res) => setHolidayTypes(res.data));
    }
    initializeHolidayTypes();
    async function initializeAllHolidayStatuses() {
      await getAllHolidayStatuses().then((res) =>
        setAllHolidayStatuses(res.data)
      );
    }
    async function initializeNoOfHolidaysPerType() {
      const response = await getNoOfHolidayPerType(
        localStorage.getItem("userId")
      );
      setTypeLabels(Object.keys(response.data));
      setNoOfHolidaysPerType(Object.values(response.data));
    }
    initializeNoOfHolidaysPerType();
    if (allHolidayStatuses === undefined) initializeAllHolidayStatuses();
  }, [allHolidayStatuses]);
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      className={classes.container}
    >
      <div className={classes.div}>
        <Grid item md={6} xs={12}>
          <Typography> TIP CONCEDIU </Typography>
          <Autocomplete
            options={holidayTypes ?? []}
            getOptionLabel={(option) => option.nume}
            onChange={async (event, value, reason) => {
              if (reason !== "clear") {
                dispatchWrapper("holidayTypeId", value.id);
                const result = await GetNoOfHolidaysByHolidayTypeId(
                  value.id,
                  localStorage.getItem("userId"),
                  new Date().getFullYear()
                );
                setNoOfHolidayDaysPerType(result.data);
              } else {
                setNoOfHolidayDaysPerType(0);
              }
            }}
            className={classes.autocomplete}
            renderInput={(params) => (
              <TextField {...params} label="" variant="outlined" />
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography> STARE CONCEDIU </Typography>
          <Autocomplete
            options={allHolidayStatuses ?? []}
            getOptionLabel={(option) => option.nume}
            onChange={async (event, value, reason) => {
              if (reason !== "clear") {
                dispatchWrapper("holidayStatusId", value.id);
                const result = await GetNoOfHolidaysByHolidayStatusId(
                  value.id,
                  localStorage.getItem("userId"),
                  new Date().getFullYear()
                );
                setNoOfFreeDaysPerStatus(result.data);
              } else {
                setNoOfFreeDaysPerStatus(0);
              }
            }}
            className={classes.autocomplete}
            renderInput={(params) => (
              <TextField {...params} label="" variant="outlined" />
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={classes.card}>
            {verificaValoare(noOfFreeDaysPerType)}{" "}
            {afisare(noOfFreeDaysPerType)}
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <div className={classes.card}>
            {verificaValoare(noOfFreeDaysPerStatus)}{" "}
            {afisare(noOfFreeDaysPerStatus)}
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <ReactApexChart
            type="donut"
            options={options2}
            series={noOfHolidaysPerType ?? []}
          ></ReactApexChart>
        </Grid>
        <Grid item md={6} xs={12}>
          <ReactApexChart
            type="donut"
            options={options}
            series={series ?? []}
          ></ReactApexChart>
        </Grid>
      </div>
    </Grid>
  );
}

export default HomePage;
