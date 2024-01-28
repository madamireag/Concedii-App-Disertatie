import React, { useReducer, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { TextField, Typography } from "@material-ui/core";
import publicMainStyle from "../../assets/jss/components/publicMainStyles";
import { Person } from "@material-ui/icons";
import { Lock } from "@material-ui/icons";
import { initialState, reducer } from "./reducers/loginReducer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { hashPassword } from "../../utils/hashPassword";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
const useStyles = makeStyles(publicMainStyle);
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const LoginPage = () => {
  const classes = useStyles();
  const [localState, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();
  const [respMsg, setRespMsg] = useState();
  const [isRespSuccess, setIsRespSuccess] = useState();
  const [open, setOpen] = useState(false);
  const handleChange = (propertyName, value) => {
    dispatch({ type: "OnPropertyChanged", propertyName, value });
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const loginUser = async () => {
    const password = await hashPassword(localState.password);
    var url = process.env.REACT_APP_API_ROUTE + "/Login/LogInUser";
    console.log(password);
    if (
      localState.userName === null ||
      localState.userName === undefined ||
      localState.userName === "" ||
      localState.password === null
    ) {
      setOpen(true);
      setIsRespSuccess("error");
      setRespMsg("Completati adresa de e-mail si parola!");
      return;
    } else {
      setOpen(false);
    }
    var resp = await axios.get(url, {
      params: {
        email: localState.userName,
        parola: password,
      },
    });

    if (!resp.data) {
      setOpen(true);
      setIsRespSuccess("error");
      setRespMsg("E-mail sau parola gresite!");
    } else {
      localStorage.setItem("userId", resp.data.id);
      localStorage.setItem(
        "userName",
        resp.data.nume + " " + resp.data.prenume
      );
      localStorage.setItem("isAdmin", resp.data.esteAdmin ? true : false);
      localStorage.setItem("poza", resp.data.poza);
      navigate(`/app/dashboard`);
      navigate(0);
    }
    return resp;
  };
  const handleClickRegister = () => {
    navigate(`/app/register`);
  };

  return (
    <Container className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={isRespSuccess}
          sx={{ width: "100%" }}
        >
          {respMsg}
        </Alert>
      </Snackbar>
      <Container className={classes.loginForm} maxWidth="sm">
        <div className={classes.paper}>
          <div className={classes.loginInputs}>
            <div className={classes.loginLabel}>
              <Person className={classes.icon} />
              <Typography component={"span"} className={classes.loginLabelText}>
                Username
              </Typography>
            </div>
            <TextField
              className={classes.loginInputsItem}
              type="text"
              variant="outlined"
              color="secondary"
              InputProps={{
                className: classes.loginInputsItemColor,
              }}
              onChange={(event) => {
                handleChange("userName", event.target.value);
              }}
            ></TextField>
            <div className={classes.loginLabel}>
              <Lock className={classes.icon} />
              <Typography component={"span"} className={classes.loginLabelText}>
                Password
              </Typography>
            </div>
            <TextField
              className={classes.loginInputsItem}
              type="password"
              variant="outlined"
              color="secondary"
              InputProps={{
                className: classes.loginInputsItemColor,
              }}
              onChange={(event) => handleChange("password", event.target.value)}
            ></TextField>
          </div>
          <Button
            className={classes.login}
            variant="contained"
            color="primary"
            size="large"
            onClick={loginUser}
          >
            {"Login"}
          </Button>
          <div className={classes.newAccount}>
            <Typography className={classes.newAccountText}>
              No account?
            </Typography>
            <Typography component={"span"} className={classes.newAccountText}>
              <div
                className={classes.newAccountLink}
                onClick={handleClickRegister}
              >
                Create New Account
              </div>
            </Typography>
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default LoginPage;
