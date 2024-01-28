const AddHolidayStyle = () => {
    return {
      DivCalendare: {
        paddingRight: '200px'
      },
      DivTextDate: {
        display: 'flex',
        alignItems: 'left',
        flexDirection: 'row'
      },
      MainContainer: {
        display: 'flex',
        alignItems: 'left',
        flexDirection: 'column',
        justifyContent: 'left'
      },
      TypographyCerereConcediu: {
        fontFamily: 'Cairo',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '34px',
        lineHeight: '64px',
        marginBottom: '40px',
        borderRadius: '14px',
        color: '#202020',
        height: '64px',
        width: '251px'
      },
      TypographyDataInceput: {
        alignSelf: 'left',
        justifyContent: 'left',
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        height: '22px',
        fontWeight: 700,
        fontSize: 16,
        letterSpacing: 1,
        color: '#C7C7C7'
      },
      ClasaSpatiu: {
        paddingTop: '35px'
      },
      ButonSalveaza: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'start',
        background: '#6418C3',
        width: '194px',
        height: '60px',
        '&:hover': { background: '#CE0ECF' }
      }
    }
  }
  
  export default AddHolidayStyle
  