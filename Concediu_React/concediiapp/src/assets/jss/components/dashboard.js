const dashboard = () => {
  return {
    card: {
      boxShadow: "0 8px 8px 0 rgba(0,0,0,0.2)",
      background: "#ffffff",
      width: "90%",
      height: "90%",
      margin: "3px 3px",
      borderRadius: "10px",
      padding: "2%",
      fontSize: "2rem",
      display:"flex",
      flexDirection:"column-reverse",
      justifyContent: "center",
      textAlign:"center",
      fontWeight:"bold",
      fontFamily: "Helvetica, Arial, sans-serif",
      textTransform: "capitalize",
      textShadow: "1px 1px 1px #00008B"
    },
    div: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "spaceBetween",
      width: "70%",
      height: "80%",
    },
    container: {
      boxShadow: "0 12px 28px rgba(0,0,0,0.3)",
      borderRadius: "14px",
      width: "1300px",
      height: "820px",
      backgroundColor: "alpha(#ECF0F1,0.7)",
      display: "flex",
      justifyContent: "center",
    },
    autocomplete: {
      '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
        borderRadius: "14px",
        height: "40px",
        width: "300px",
      },
    },
  };
};
export default dashboard;
