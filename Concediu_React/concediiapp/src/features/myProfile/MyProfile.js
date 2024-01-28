import React, { useEffect, useReducer, useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import employeeStyle from "../employee/styles/employeeStyle";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import { Save } from "@material-ui/icons";
import { Edit } from "@material-ui/icons";
import { reducer } from "../employee/reducer";
import EmployeeInfoTop from "../employee/EmployeeInfoTop";
import MyProfileHeader from "./MyProfileHeader";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const useStyles = makeStyles(employeeStyle);

const initialState = {
  employee: {},
  isEditing: false,
};
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MyProfile() {
  const classes = useStyles();

  const id = parseInt(localStorage.getItem("userId"));
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [employeeData, setEmployeeData] = useState();
  const [loading, setLoading] = useState(true);
  const [respMsg, setRespMsg] = useState();
  const [isRespSuccess, setIsRespSuccess] = useState();
  const inputRef = useRef(null);

  useEffect(() => {
    async function initializeEmployeeData(employeeId) {
      const url = process.env.REACT_APP_API_ROUTE + "/EmployeeList/GetEmployee";
      await axios
        .get(url, {
          params: {
            employeeId: employeeId,
          },
        })
        .then((res) => {
          setLoading(false);
          setEmployeeData(res.data);
        });
    }
    if (!employeeData && loading) initializeEmployeeData(id);
    if (employeeData && !loading) {
      dispatch({
        type: "update",
        employee: employeeData,
      });
    }
  }, [employeeData, id, loading]);

  const handleClickCancel = () => {
    dispatch({
      type: "edit",
      isEditing: false,
    });
    dispatch({
      type: "update",
      employee: employeeData,
    });
  };
  function modifyDataProfile(inputName, inputValue) {
    localStorage.setItem("poza", inputValue);
    dispatch({ type: "field", inputName, inputValue });
  }
  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(fileObj);
    reader.onload = () => {
      modifyDataProfile(
        ["employee", "poza"],
        reader.result.substring(
          reader.result.indexOf(",") + 1,
          reader.result.length
        )
      );
    };
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleClickSave = async () => {
    await axios
      .put(
        process.env.REACT_APP_API_ROUTE + "/EmployeeList/UpdateEmployee",
        state.employee
      )
      .then((res) => {
        if (res.status === 200) {
          setOpen(true);
          setIsRespSuccess("success");
        } else {
          setIsRespSuccess("error");
        }
        setRespMsg(res.data);
      });
    dispatch({
      type: "edit",
      isEditing: false,
    });
  };

  const handleClickEdit = () => {
    dispatch({
      type: "edit",
      isEditing: true,
    });
  };

  const handleOnCHangeText = (value, propname) => {
    dispatch({ type: "onchange", value, propname });
  };

  return (
    <div className={classes.page}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={isRespSuccess}
          sx={{ width: "100%" }}
        >
          {respMsg}
        </Alert>
      </Snackbar>
      <MyProfileHeader />
      <EmployeeInfoTop
        state={state}
        handleOnCHangeText={handleOnCHangeText}
        inputRef={inputRef}
        handleFileChange={handleFileChange}
      />
      <Grid container spacing={5} className={classes.contactInfo}>
        <Grid item md={6} xs={12}>
          <div className={classes.contactInput}>
            <Typography className={classes.contactText}>CNP</Typography>
            <TextField
              variant="outlined"
              value={state?.employee.cnp ?? ""}
              onChange={(event) =>
                handleOnCHangeText(event.target.value, "cnp")
              }
              InputProps={{
                className: `${classes.textField} ${
                  !state.isEditing ? classes.readOnly : ""
                }`,
                readOnly: true,
              }}
            ></TextField>
          </div>
        </Grid>
        <Grid item md={3} xs={12}>
          <div className={classes.contactInput}>
            <Typography className={classes.contactText}>Serie</Typography>
            <TextField
              variant="outlined"
              value={state?.employee.serie ?? ""}
              onChange={(event) =>
                handleOnCHangeText(event.target.value, "serie")
              }
              InputProps={{
                className: `${classes.textField} ${
                  !state.isEditing ? classes.readOnly : ""
                }`,
                readOnly: !state.isEditing,
              }}
            ></TextField>
          </div>
        </Grid>
        <Grid item md={3} xs={12}>
          <div className={classes.contactInput}>
            <Typography className={classes.contactText}>Nr</Typography>
            <TextField
              variant="outlined"
              value={state?.employee.no ?? ""}
              onChange={(event) => handleOnCHangeText(event.target.value, "no")}
              InputProps={{
                className: `${classes.textField} ${
                  !state.isEditing ? classes.readOnly : ""
                }`,
                readOnly: !state.isEditing,
              }}
            ></TextField>
          </div>
        </Grid>
        <Grid item md={8} xs={12}>
          <div className={classes.contactInput}>
            <Typography className={classes.contactText}>
              Data Angajare
            </Typography>
            <TextField
              variant="outlined"
              value={state?.employee?.dataAngajare?.substring(0, 10) ?? ""}
              type="date"
              onChange={(event) =>
                handleOnCHangeText(event.target.value, "dataAngajare")
              }
              InputProps={{
                className: `${classes.textField} ${
                  !state.isEditing ? classes.readOnly : ""
                }`,
                readOnly: true,
              }}
            ></TextField>
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <div className={classes.contactInput}>
            <Typography className={classes.contactText}>
              Zile Concediu
            </Typography>
            <TextField
              variant="outlined"
              value={state?.employee.zileConcediu ?? ""}
              onChange={(event) =>
                handleOnCHangeText(event.target.value, "zileConcediu")
              }
              InputProps={{
                className: `${classes.textField} ${
                  !state.isEditing ? classes.readOnly : ""
                }`,
                readOnly: true,
              }}
            ></TextField>
          </div>
        </Grid>
      </Grid>
      {state.isEditing && (
        <Grid container spacing={5} justifyContent="center">
          <Grid item md={6} xs={12}>
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              startIcon={<Cancel />}
              onClick={handleClickCancel}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item md={6} xs={12}>
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              startIcon={<Save />}
              onClick={handleClickSave}
            >
              Save
            </Button>
          </Grid>
        </Grid>
      )}
      {!state.isEditing && (
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12}>
            <Button
              className={classes.button}
              variant="contained"
              size="large"
              startIcon={<Edit />}
              onClick={handleClickEdit}
            >
              Edit Profile
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default MyProfile;
