import React from 'react'
import { IconButton, makeStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import employeeHeaderStyle from './styles/employeeHeaderStyle'
import iconBack from '../../assets/img/iconBack.svg'

const useStyles = makeStyles(employeeHeaderStyle)

function EmployeeHeader({ handleClick }) {
  const classes = useStyles()

  return (
    <div className={classes.header}>
      <IconButton className={classes.buttonDots} aria-label='options' onClick={handleClick}>
        <img className={classes.icon} alt='iconBack' src={iconBack} />
      </IconButton>
      <h2 className={classes.title}>Detalii angajat</h2>
    </div>
  )
}

EmployeeHeader.propTypes = {
  handleClick: PropTypes.func.isRequired
}

export default EmployeeHeader
