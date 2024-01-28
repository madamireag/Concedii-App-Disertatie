import React from "react";
import { BrowserRouter } from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// context
import { useLayoutState } from "../../context/LayoutContext";
import AppRoutes from "./AppRoutes";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();
  const userId = localStorage.getItem("userId");
  return (
    <BrowserRouter>
      {userId ? (
        <div className={classes.root}>
          <>
            <Header history={props.history} />
            <Sidebar />
            <div
              className={classnames(classes.content, {
                [classes.contentShift]: layoutState.isSidebarOpened,
              })}
            >
              <div className={classes.fakeToolbar} />

              <AppRoutes />
            </div>
          </>
        </div>
      ) : (
        <AppRoutes />
      )}
    </BrowserRouter>
  );
}

export default Layout;
