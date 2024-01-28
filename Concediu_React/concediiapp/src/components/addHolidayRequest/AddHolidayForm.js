import { React, useState } from "react";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Save from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

function AddHolidayForm(props) {
  const {
    classes,
    dispatchWrapper,
    state,
    holidayTypes,
    replacements,
    insertHoliday,
    noOfFreeDaysPerType,
  } = props;
  const [noOfHolidayDays, setNoOfHolidayDays] = useState(0);
  const computeNoOfDays = (id) => {
    var x = noOfFreeDaysPerType[id];
    return x;
  };
  function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      className={classes.container}
    >
      <h1 className={classes.title}>Adauga Concediu</h1>
      <div className={classes.div}>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}> DATA INCEPUT </Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              onChange={(e) => dispatchWrapper("startDate", e)}
              disableToolbar
              variant="inline"
              margin="normal"
              value={state.startDate}
              minDate={new Date()}
              className={classes.datepicker}
              shouldDisableDate={disableWeekends}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}> DATA FINAL </Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              onChange={(e) => dispatchWrapper("endDate", e)}
              disableToolbar
              variant="inline"
              margin="normal"
              minDate={state.startDate}
              InputProps={{
                disableUnderline: true,
              }}
              shouldDisableDate={disableWeekends}
              className={classes.datepicker}
              value={state.endDate}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}> TIP CONCEDIU </Typography>
          <Autocomplete
            options={holidayTypes ?? []}
            getOptionLabel={(option) => option.nume}
            onChange={(event, value) => {
              dispatchWrapper("holidayTypeId", value.id);
              setNoOfHolidayDays(computeNoOfDays(value.id));
            }}
            className={classes.autocomplete}
            renderInput={(params) => (
              <TextField {...params} label="" variant="outlined" />
            )}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}> INLOCUITOR </Typography>
          <Autocomplete
            options={replacements ?? []}
            className={classes.autocomplete}
            getOptionLabel={(option) => option.nume}
            onChange={(event, value) => {
              dispatchWrapper("replacementId", value.id);
            }}
            renderInput={(params) => (
              <TextField {...params} label="" variant="outlined" />
            )}
          />
        </Grid>

        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>
            ZILE LIBERE SOLICITATE
          </Typography>
          <TextField
            value={state.totalZileSolicitate}
            id="standard-read-only-input"
            className={classes.textfield}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classes.label}>
            ZILE LIBERE DISPONIBILE
          </Typography>
          <TextField
            id="standard-read-only-input"
            value={noOfHolidayDays}
            className={classes.textfield}
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.label}>COMENTARII</Typography>
          <TextField
            fullWidth
            className={classes.multitextfield}
            defaultValue=""
            variant="outlined"
            onChange={(e) => dispatchWrapper("comments", e.target.value)}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<Cancel />}
          >
            Renunta
          </Button>
        </Grid>
        <Grid item md={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            onClick={insertHoliday}
            startIcon={<Save />}
          >
            SAVE
          </Button>
        </Grid>
      </div>
    </Grid>
  );
}

export default AddHolidayForm;
