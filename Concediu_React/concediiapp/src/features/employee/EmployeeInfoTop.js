import { Grid, makeStyles, TextField, Typography } from '@material-ui/core'
import React, {useEffect} from 'react'
import EmployeeMiniCard from './EmployeeMiniCard'
import PropTypes from 'prop-types'
import iconPhone from '../../assets/img/iconPhone.svg'
import iconEmail from '../../assets/img/iconEmail.svg'
import employeeStyle from './styles/employeeStyle'

const useStyles = makeStyles(employeeStyle)

function EmployeeInfoTop({ state, handleOnCHangeText, inputRef,handleFileChange }) {
  const classes = useStyles()
  useEffect(() => {
 
  },[state])
  return (
    <Grid container spacing={1} direction='row' justifyContent='flex-end' alignItems='center' className={classes.contactInfo}>
      <Grid item md={4} xs={12}>
        <EmployeeMiniCard state={state} handleOnCHangeText={handleOnCHangeText} inputRef={inputRef} handleFileChange={handleFileChange} />
      </Grid>
      <Grid item md={4} xs={12}>
        <div className={classes.contactItem}>
          <img className={classes.contactIcon} alt='iconEmail' src={iconEmail} />
          <div className={classes.contactInputTop}>
            <Typography className={classes.contactText}>Email</Typography>
            <TextField
              variant='outlined'
              value={state?.employee.email?? ""}
              onChange={event => handleOnCHangeText(event.target.value, 'email')}
              InputProps={{
                className: `${classes.textField} ${!state.isEditing ? classes.readOnly : ''}`,
                readOnly: !state.isEditing
              }}
            ></TextField>
          </div>
        </div>
      </Grid>
      <Grid item md={4} xs={12}>
        <div className={classes.contactItem}>
          <img className={classes.contactIcon} alt='iconPhone' src={iconPhone} />
          <div className={classes.contactInputTop}>
            <Typography className={classes.contactText}>Telefon</Typography>
            <TextField
              variant='outlined'
              value={state?.employee.nrTelefon?? ""}
              onChange={event => handleOnCHangeText(event.target.value, 'nrTelefon')}
              InputProps={{
                className: `${classes.textField} ${!state.isEditing ? classes.readOnly : ''}`,
                readOnly: !state.isEditing
              }}
            ></TextField>
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

EmployeeInfoTop.propTypes = {
  state: PropTypes.object.isRequired,
  handleOnCHangeText: PropTypes.func.isRequired
}

export default EmployeeInfoTop
