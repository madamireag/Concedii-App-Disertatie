import { alpha } from "@material-ui/core";

const employeeStyle = () => {
  return {
    page: {
      padding: "40px",
      backgroundColor: "linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)",
      boxShadow: "16px 16px 16px rgba(0, 0, 0, 0.16)",
      borderRadius: "14px",
    },
    contactInfo: {
      marginTop: "14px",
      marginBottom: "24px",
    },
    contactItem: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
    },
    contactIcon: {
      marginLeft: "24px",
      width: "42px",
      height: "42px",
    },
    contactInputTop: {
      display: "flex",
      flexDirection: "column",
      marginLeft: "24px",
      width: "100%",
    },
    contactInput: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    contactText: {
      fontWeight: "600",
      fontSize: "18px",
      lineHeight: "19px",
    },
    textField: {
      marginTop: "8px",
      borderRadius: "14px",
      height: "40px",
      width: "100%",
    },
    button: {
      margin: "14px 0",
      backgroundColor: "#6418C3",
      color: "white",
      fontWeight: 700,
      lineHeight: "32px",
      width: "100%",
      borderRadius: "14px",
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
      textTransform: "capitalize",
      "&:hover": {
        backgroundColor: alpha("#6418C3", 0.7),
        boxShadow: "none",
      },
    },
    icon: {
      width: "24px",
      height: "24px",
    },
    readOnly: {
      color: "white",
      fontWeight: 700,
    },
  };
};

export default employeeStyle;
