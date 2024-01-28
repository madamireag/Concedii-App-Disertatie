import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import Cancel from "@material-ui/icons/Cancel";

function EmployeeForm(props) {
  const { state, classesForm, dispatchWrapper, handleSave } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      className={classesForm.container}
    >
      <div className={classesForm.div}>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>Nume</Typography>
          <TextField
            variant="outlined"
            required
            className={classesForm.textfield}
            onChange={(event) => {
              dispatchWrapper("nume", event.target.value);
            }}
          ></TextField>
          <p className={classesForm.errorP}>
            {state.isValidNume === false ? state.numeErr : ""}
          </p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>Prenume</Typography>
          <TextField
            variant="outlined"
            required
            className={classesForm.textfield}
            onChange={(event) => {
              dispatchWrapper("prenume", event.target.value);
            }}
          ></TextField>
          <p className={classesForm.errorP}>
            {state.isValidPrenume === false ? state.prenumeErr : ""}
          </p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>E-mail</Typography>
          <TextField
            required
            variant="outlined"
            type={"email"}
            className={classesForm.textfield}
            onChange={(event) => {
              dispatchWrapper("email", event.target.value);
            }}
          ></TextField>
          <p className={classesForm.errorP}>
            {state.isValidEmail === false ? state.emailErr : ""}
          </p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>Parola</Typography>
          <TextField
            variant="outlined"
            type={"password"}
            required
            className={classesForm.textfield}
            onChange={(event) => {
              dispatchWrapper("parola", event.target.value);
            }}
          ></TextField>
          <p className={classesForm.errorP}>
            {state.isValidPass === false ? state.passErr : ""}
          </p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>CNP</Typography>
          <TextField
            autoFocus={false}
            variant="outlined"
            type={"number"}
            required
            className={classesForm.textfield}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 13);
            }}
            onChange={(event) => {
              dispatchWrapper("cnp", event.target.value);
            }}
          ></TextField>
          <p className={classesForm.errorP}>
            {state.isValidCnp === false ? state.cnpErr : ""}
          </p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>Numar Telefon</Typography>
          <TextField
            variant="outlined"
            type={"number"}
            required
            className={classesForm.textfield}
            onChange={(event) => {
              dispatchWrapper("phone", event.target.value);
            }}
          ></TextField>
          <p className={classesForm.errorP}>
            {state.isValidPhoneNo === false ? state.phoneNoErr : ""}
          </p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>Data Angajare</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classesForm.datepicker}
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              maxDate={new Date()}
              margin="normal"
              InputProps={{
                disableUnderline: true,
              }}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              classes={{
                root: classesForm.datepicker,
              }}
              onChange={(event) => {
                dispatchWrapper("dataAngajarii", event);
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>Data Nastere</Typography>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              className={classesForm.datepicker}
              disableToolbar
              readOnly
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              value={state.dataNasterii}
              onChange={(event) => {
                dispatchWrapper("dataNasterii", event);
              }}
              InputProps={{
                disableUnderline: true,
              }}
              classes={{
                root: classesForm.datepicker,
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>Seria</Typography>
          <TextField
            variant="outlined"
            className={classesForm.textfield}
            inputProps={{ maxLength: 2 }}
            onChange={(event) => {
              dispatchWrapper("serie", event.target.value);
            }}
          ></TextField>
          <p className={classesForm.errorP}>
            {state.isValidSerie === false ? state.serieErr : ""}
          </p>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography className={classesForm.label}>Numar</Typography>
          <TextField
            variant="outlined"
            type={"number"}
            className={classesForm.textfield}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, 6);
            }}
            onChange={(event) => {
              dispatchWrapper("nr", event.target.value);
            }}
          ></TextField>
          <p className={classesForm.errorP}>
            {state.isValidNr === false ? state.nrErr : ""}
          </p>
        </Grid>
        <Grid item md={6} xs={12}></Grid>
        <Grid item md={6} xs={12}></Grid>
        <Grid item md={6} xs={12}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classesForm.button}
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
            className={classesForm.button}
            onClick={handleSave}
            startIcon={<SaveIcon />}
          >
            Salveaza
          </Button>
        </Grid>
      </div>
    </Grid>
  );
}

export default EmployeeForm;
