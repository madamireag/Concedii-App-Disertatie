import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import formStyle from "../../assets/jss/components/formStyle";
import { Grid, Typography, IconButton, Button } from "@material-ui/core";
import iconBack from "../../assets/img/iconBack.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useStyles = makeStyles(formStyle);
function DetailsComponent() {
  const classes = useStyles();
  const [holiday, setHoliday] = useState();
  const [showButtons, setShowButtons] = useState(false);
  const [motiv, setMotiv] = useState();

  const { id } = useParams();
  const isAdmin = localStorage.getItem("isAdmin");
  useEffect(() => {
    async function initializeHolidayData(holidayId) {
      const url =
        process.env.REACT_APP_API_ROUTE + "/HolidayDetails/GetHolidayById";
      await axios
        .get(url, {
          params: {
            holidayId: holidayId,
          },
        })
        .then((res) => {
          setHoliday(res.data);
        });
    }

    if (!holiday) initializeHolidayData(id);
    if (holiday?.stareConcediu.id === 3 && isAdmin) setShowButtons(true);
    console.log(holiday);
  }, [holiday, id, isAdmin]);

  const navigate = useNavigate();

  const handleClick = (stareConcediuId) => async () => {
    holiday.stareConcediuId = stareConcediuId;
    if (stareConcediuId === 2) holiday.motivRespingere = motiv;
    await axios.post(
      process.env.REACT_APP_API_ROUTE + "/HolidayDetails/UpdateHolidayStatus",
      holiday
    );
  };
  const handleBack = () => {
    navigate(`/app/holidays`);
  };

  return (
    <div className={classes.card}>
      <IconButton
        className={classes.buttonDots}
        aria-label="options"
        onClick={handleBack}
      >
        <img className={classes.icon} alt="iconBack" src={iconBack} />
      </IconButton>
      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        className={classes.container}
      >
        <div className={classes.div}>
          <Grid item md={6} xs={12}>
            <Typography className={classes.label}>Nume</Typography>
            <TextField
              inputProps={{ readOnly: true }}
              value={holiday ? holiday?.angajat.nume : " "}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography className={classes.label}>Manager</Typography>
            <TextField
              className={classes.textfield}
              inputProps={{ readOnly: true }}
              value={holiday ? holiday?.angajat.manager.nume : ""}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography className={classes.label}>Tip concediu</Typography>
            <TextField
              inputProps={{ readOnly: true }}
              className={classes.textfield}
              value={holiday ? holiday.tipConcediu.nume : ""}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography className={classes.label}>Inlocuitor</Typography>
            <TextField
              className={classes.textfield}
              inputProps={{ readOnly: true }}
              value={holiday ? holiday.inlocuitor.nume : "nu are"}
            ></TextField>
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography className={classes.label}>Data inceput</Typography>
            <TextField
              inputProps={{ readOnly: true }}
              className={classes.textfield}
              InputLabelProps={{ shrink: true }}
              value={
                holiday
                  ? new Date(holiday.dataInceput).toLocaleDateString("en-GB")
                  : new Date().toLocaleDateString("en-GB")
              }
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography className={classes.label}>Data final</Typography>
            <TextField
              InputLabelProps={{ shrink: true }}
              className={classes.textfield}
              inputProps={{ readOnly: true }}
              value={
                holiday
                  ? new Date(holiday.dataSfarsit).toLocaleDateString("en-GB")
                  : new Date().toLocaleDateString("en-GB")
              }
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography className={classes.label}>Stare</Typography>
            <TextField
              className={classes.textfield}
              inputProps={{ readOnly: true }}
              value={
                holiday?.stareConcediu.nume ? holiday.stareConcediu.nume : ""
              }
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography className={classes.label}>Motiv respingere</Typography>
            <TextField
              className={classes.textfield}
              value={holiday ? holiday.motivRespingere : ""}
              onChange={(ev) => {
                setMotiv(ev.target.value);
              }}
            />
          </Grid>

          {showButtons && (
            <Grid item md={6} xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                size="small"
                onClick={handleClick(1)}
              >
                Aproba
              </Button>{" "}
            </Grid>
          )}

          {showButtons && (
            <Grid item md={6} xs={12}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                size="small"
                onClick={handleClick(2)}
              >
                Respinge
              </Button>
            </Grid>
          )}
        </div>
      </Grid>
    </div>
  );
}

export default DetailsComponent;
