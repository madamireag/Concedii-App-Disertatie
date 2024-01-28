
const employeeCardStyle = theme => {
  return {
    card: {
      display: 'block',
      position: 'relative',
      minWidth: '300px',
      // width: '100%',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)',
      background: '#FFFFFF',
      // border: '1px solid rgba(0, 0, 0, 0.23)',
      borderRadius: '14px',
      margin: 'auto',
      padding: '24px',
      textAlign: 'center'
    },
    cardContent: {
      padding: '0 0 0 0'
    },
    buttonDots: {
      position: 'absolute',
      top: '14px',
      right: '14px'
    },
    image: {
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: '24px',
      borderRadius: '26px'
    },
    name: {
      margin: 0,
      fontWeight: 700,
      fontSize: '18px',
      lineHeight: '34px',
      color: '#202020'
    },
    job: {
      marginBottom: '24px',
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '20px',
      color: '#A5A5A5'
    },
    contact: {
      textAlign: 'left'
    },
    contactItem: {
      paddingBottom: '12px'
    },
    contactIcon: {
      paddingRight: '12px'
    },
    contactText: {
      fontWeight: '600',
      fontSize: '14px',
      lineHeight: '19px'
    },
    hide: {
      display: 'none'
    }
  }
}

export default employeeCardStyle
