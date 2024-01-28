import React from 'react'
import iconSearch from '../../assets/img/iconSearch.svg'
import iconAddUser from '../../assets/img/iconAddUser.svg'
import PropTypes from 'prop-types'
import { Button, InputBase } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import searchHeaderStyle from './styles/searchHeaderStyle'

const useStyles = makeStyles(searchHeaderStyle)

function SearchHeader({ searchHandler, searchInputRef, permissions }) {

  const classes = useStyles()


  const handleClick = () => {
 //   history.push({ pathname: '/add-employee' })
  }

  return (
    <div className={classes.pageHeader}>
      <h1 className={classes.title}>Angajati</h1>
      <div className={classes.headerRight}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <img className={classes.icon} alt='iconSearch' src={iconSearch} />
          </div>
          <InputBase
            placeholder='Search…'
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ 'aria-label': 'search' }}
            inputRef={searchInputRef}
            onChange={searchHandler}
          />
        </div>
        {permissions && (
          <Button
            className={classes.button}
            variant='contained'
            size='large'
            startIcon={<img className={classes.icon} alt='iconAddUser' src={iconAddUser} />}
            onClick={handleClick}
          >
            Adauga angajat
          </Button>
        )}
      </div>
    </div>
  )
}



export default SearchHeader
