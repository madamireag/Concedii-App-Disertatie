import { alpha } from '@material-ui/core'
import background from '../../img/welcome.png'

const publicMainStyle = theme => {
  return {
    root: {
      background: `url(${background})`,
      minHeight: '100%',
      minWidth: '100%',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'fixed'
    },
    loginForm: {
      background: alpha('#F2F3F4',0.7),
      display: 'block',
      borderRadius: '14px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.06)',
      position: 'relative',
      marginTop: 'calc(50vh - 300px)',
      padding: '24px'
    },
    paper: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box'
    },
    logo: {
      width: '55%'
    },
    login: {
      padding: '14px 24px',
      width: '60%',
      backgroundColor: '#64A8AC',
      color: 'white',
      fontWeight: 700,
      borderRadius: '14px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: alpha('#64A8AC', 0.7),
        boxShadow: 'none'
      }
    },
    loginInputs: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: '64px',
      marginBottom: '24px',
      width: '60%'
    },
    loginLabel: {
      display: 'flex',
      marginBottom: '14px',
      color: '#1F4246'
    },
    loginLabelText: {
      fontWeight: 'bold',
      marginLeft: '14px'
    },
    loginInputsItem: {
      marginBottom: '24px'
    },
    loginInputsItemColor: {
      backgroundColor: 'white',
      borderRadius: '14px',
      '&:hover, &:focus, &::selection': {
        color: 'black',
        backgroundColor: 'white'
      }
    },
    error: {
      marginTop: '14px'
    },
    buttonFooter: {
      height: '32px',
      width: '100%',
      fontSize: '11px',
      color: '#ccc'
    },
    gridFooter: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '32px',
      backgroundColor: '#444'
    },
    gridFooterItem: {
      padding: '0 8px !important'
    },
    card: {
      paddingLeft: '20px',
      paddingBottom: '15px',
      paddingRight: '20px',
      paddingTop: '15px'
    },
    firstCardPadding: {
      paddingTop: '20px'
    },
    doneButton: {
      width: '-webkit-fill-available'
    },
    statement: {
      overflow: 'auto',
      height: '60vh',
      marginTop: '20vh'
    },
    loadingArea: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      background: 'white',
      display: 'block',
      boxShadow: '0 1px 10px rgba(0,0,0,0.3)'
    },
    scrollArea: {
      overflow: 'auto',
      height: '100vh'
    },
    padding25: {
      padding: '25px'
    },
    paddingTopBottom10: {
      padding: '10px 0'
    },
    title: {
      fontWeight: 'bold',
      textAlign: 'center'
    },
    subtitle: {
      fontWeight: 'bold',
      padding: '5px 0'
    },
    note: {
      padding: '20px 0 10px'
    },
    logoWrapper: {
      width: '250px',
      height: '100px',
      display: 'flex',
      margin: 'auto'
    },
    wrappedImg: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      margin: 0
    },
    gifWrapper: {
      width: '350px',
      height: '200px',
      display: 'flex'
    },
    publicFooterContainer: {
      paddingTop: '20px',
      paddingBottom: '50px'
    },
    publicHeaderFooterGrid: {
      backgroundColor: 'white',
      borderRadius: '5px'
    },
    newAccount: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '60%',
      marginTop: '42px',
      color: 'white'
    },
    newAccountText: {
      fontWeight: 'bold',
      color: 'CornflowerBlue'
    },
    newAccountLink: {
      color: 'CornflowerBlue',
      '&:hover': {
        color: 'DarkSlateBlue',
        textDecoration: 'underline',
        cursor: 'pointer'
      }
    },
    icon: {
      color: '#349BA7'
    }
  }
}
export default publicMainStyle
