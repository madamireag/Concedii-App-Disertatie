const employeeMiniCardStyle = () => {
  return {
    card: {
      padding: '16px',
      backgroundColor: '#ffffff',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.08)',
      borderRadius: '14px',
      display: 'flex'
    },
    icon: {
      backgroundColor: '#ebf3f6',
      color: '#DFA625',
      borderRadius: '8px',
      padding: '2px',
      width: '24px',
      height: '24px'
    },
    avatar: {
      width: '74px',
      height: '74px',
      borderRadius: '14px'
    },
    user: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '24px'
    },
    firstName: {
      fontWeight: '700',
      fontSize: '22px',
      lineHeight: '38px',
      color: '#202020'
    },
    lastName: { fontSize: '20px', lineHeight: '38px', fontWeight: 700 },
    textField: {
      marginTop: '8px',
      borderRadius: '14px',
      height: '25px',
      width: '100%'
    }
  }
}

export default employeeMiniCardStyle
