import { Badge, makeStyles, TextField, Typography } from "@material-ui/core";
import { Edit } from "@material-ui/icons";
import PropTypes from "prop-types";
import React from "react";
import employeeMiniCardStyle from "./styles/employeeMiniCardStyle";
const useStyles = makeStyles(employeeMiniCardStyle);

function EmployeeMiniCard({
  state,
  handleOnCHangeText,
  inputRef,
  handleFileChange,
}) {
  const classes = useStyles();

  var imgURL = `data:image/*;base64,${state?.employee.poza}`;

  return (
    <div className={classes.card}>
      {state.isEditing ? (
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <label htmlFor="poza">
              <input
                id="poza"
                ref={inputRef}
                type="file"
                hidden
                onChange={handleFileChange}
              />
              <Edit className={classes.icon} fontSize="medium" />
            </label>
          }
        >
          <img className={classes.avatar} alt="avatar" src={imgURL} />
        </Badge>
      ) : (
        <img className={classes.avatar} alt="avatar" src={imgURL} />
      )}
      {state.isEditing ? (
        <div className={classes.user}>
          <TextField
            variant="outlined"
            value={state.employee.prenume}
            onChange={(event) =>
              handleOnCHangeText(event.target.value, "prenume")
            }
            InputProps={{
              className: classes.textField,
              readOnly: !state.isEditing,
            }}
          ></TextField>
          <TextField
            variant="outlined"
            value={state.employee.nume}
            onChange={(event) => handleOnCHangeText(event.target.value, "nume")}
            InputProps={{
              className: classes.textField,
              readOnly: !state.isEditing,
            }}
          ></TextField>
        </div>
      ) : (
        <div className={classes.user}>
          <Typography className={classes.firstName}>
            {state.employee.prenume}
          </Typography>
          <Typography className={classes.lastName}>
            {state.employee.nume}
          </Typography>
        </div>
      )}
    </div>
  );
}

EmployeeMiniCard.propTypes = {
  state: PropTypes.object.isRequired,
  handleOnCHangeText: PropTypes.func.isRequired,
};

export default EmployeeMiniCard;
