import background from "../../../assets/img/background.jpg";
const formStyle = (theme) => {
  return {
    card: {
      background: "linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)",
      borderRadius: "10px",
      padding: "2%",
      margin: 0,
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
    },
    title: {
      fontFamily: "Cairo",
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: "32px",
      lineHeight: "64px",
      marginBottom: "40px",
      borderRadius: "14px",
      color: "#202020",
      height: "64px",
      width: "251px",
    },
    container: {
      boxShadow: "0 12px 28px rgba(0,0,0,0.3)",
      borderRadius: "14px",
      width: "800px",
      height: "820px",
      backgroundColor: "alpha(#ECF0F1,0.7)",
      display: "flex",
      justifyContent: "center",
    },
    div: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "spaceBetween",
      width: "70%",
      height: "80%",
    },
    label: {
      padding: "5px",
      fontFamily: "Open Sans",
      fontWeight: "700",
      fontStyle: "normal",
      fontSize: "16px",
      lineHeight: "22px",
      color: "#fffff",
      letterSpacing: "1px",
    },
    autocomplete: {
      '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
        borderRadius: "14px",
        height: "40px",
        width: "250px",
      },
    },

    textfield: {
      "& .MuiFormControl-root MuiTextField-root": {
        borderRadius: "14px",
        height: "40px",
        width: "250px",
      },
      "& .MuiOutlinedInput-root": {
        borderRadius: "14px",
        height: "40px",
        width: "250px",
        "& input[type=number]::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "& input[type=number]::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
      },
    },
    multitextfield: {
      "& .MuiOutlinedInput-root": {
        borderRadius: "14px",
        padding: "0",
        margin: "0",
        height: "100px",
        width: "100%%",
        "& input[type=number]::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
        "& input[type=number]::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: 0,
        },
      },
    },
    datepicker: {
      border: "1px solid #6578ae",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",

      height: "40px",
      width: "250px",
      margin: 0,
      "& .MuiIconButton-root": {
        color: "#6418C3",
      },
      "& .MuiInputBase-root": {
        paddingLeft: "3%",
      },
    },
    button: {
      width: "194px",
      height: "50px",
      backgroundColor: "#6418C3",
      borderRadius: "14px",
    },
    errorP: {
      color: "red",
    },
    header: {
      display: "flex",
      lineHeight: "24px",
    },
  };
};

export default formStyle;
