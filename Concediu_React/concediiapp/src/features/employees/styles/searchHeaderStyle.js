import { alpha } from '@material-ui/core'


const searchHeaderStyle = theme => {
  return {
    pageHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '24px',
      marginLeft: '14px',
      marginRight: '14px'
    },
    title: {
      fontWeight: '700',
      fontSize: '34px',
      lineHeight: '64px',
      color: '#202020'
    },
    headerRight: {
      display: 'flex'
    },
    search: {
      display: 'flex',
      position: 'relative',
      borderRadius: '14px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
      '&:hover': {
        backgroundColor: alpha('#DFA625', 0.05)
      },
      marginLeft: '24px',
      width: '100%',
      height: '50px',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto'
      }
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      width: '24px',
      height: '24px'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch'
        }
      }
    },
    button: {
      marginLeft: '14px',
      backgroundColor: '#DFA625',
      color: 'white',
      fontWeight: 700,
      borderRadius: '14px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: alpha('#DFA625', 0.7),
        boxShadow: 'none'
      }
    }
  }
}

export default searchHeaderStyle
