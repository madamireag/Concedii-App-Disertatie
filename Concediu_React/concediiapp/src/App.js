import React from "react";
import { LayoutProvider } from "./context/LayoutContext";
import Themes from "./themes";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <LayoutProvider>
      <ThemeProvider theme={Themes.default}>
        <Layout />
        <CssBaseline />
      </ThemeProvider>
    </LayoutProvider>
  );
}

export default App;
