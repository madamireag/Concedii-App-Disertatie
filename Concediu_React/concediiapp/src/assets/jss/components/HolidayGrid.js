const gridStyle = (theme) => {
  return {
    container: {
      padding: "2px",
    },
    card: {
      transformStyle: "preserve-3d",
      boxShadow: "0 8px 8px 0 rgba(0,0,0,0.2)",
      background: "#ffffff",
      transition: "0.5s",
      margin: "10px 0px",
      borderRadius: "10px",
      padding: "2%",
      "&:hover": {
        cursor: "pointer",
        transform: "rotateY(180deg)",
        transition: "transform 0.5s",
      },
    },
    motivRespingere: {
      position: "absolute",
      fontSize: "1.2rem",
      backfaceVisibility: "hidden",
      transform: "rotateY(180deg)",
      transformOrigin: "180%",
    },
    lblTip: {
      fontSize: "1.2rem",
      backfaceVisibility: "hidden",
      paddingBottom: "0.5%",
    },
    tipConcediu: {
      fontSize: "1.2rem",
      backfaceVisibility: "hidden",
    },
    lblInlocuitor: {
      fontSize: "1.2rem",
      backfaceVisibility: "hidden",
      paddingBottom: "0.5%",
    },
    inlocuitor: {
      fontSize: "1.2rem",
      backfaceVisibility: "hidden",
    },
    lblPerioada: {
      fontSize: "1.2rem",
      backfaceVisibility: "hidden",
      paddingBottom: "0.5%",
    },
    perioada: {
      fontSize: "1.2rem",
      backfaceVisibility: "hidden",
    },
    lblStare: {
      backfaceVisibility: "hidden",
      fontSize: "1.2rem",
      paddingBottom: "0.5%",
    },
    stare: {
      fontSize: "1.2rem",
      backfaceVisibility: "hidden",
    },
  };
};

export default gridStyle;
