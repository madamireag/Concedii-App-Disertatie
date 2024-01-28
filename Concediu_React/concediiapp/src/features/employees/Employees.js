import React, {
  useEffect,
  useReducer,
  useRef,
  useState,
  useCallback,
} from "react";
import SearchHeader from "./SearchHeader";
import EmployeesCards from "./EmployeesCards";
import { makeStyles } from "@material-ui/core/styles";
import employeesStyle from "./styles/employeesStyle";
import axios from "axios";

import { reducer } from "./reducer";

const useStyles = makeStyles(employeesStyle);

const initialState = {
  results: [],
  query: "",
};

function Employees() {
  const classes = useStyles();

  const [state, dispatch] = useReducer(reducer, initialState);

  const [employeeData, setEmployeeData] = useState();
  const [loading, setLoading] = useState(true);
  const getEmployees = async () => {
    const url =
      process.env.REACT_APP_API_ROUTE + "/EmployeeList/GetEmployeesFull";
    const res = await axios.get(url);
    return res;
  };
  const initializeEmployeeData = useCallback(async () => {
    const res = await getEmployees();
    setEmployeeData(res.data);
    setLoading(false);
  }, []);
  useEffect(() => {
    if (employeeData === undefined && loading) initializeEmployeeData();
    console.log(employeeData);
    if (employeeData && !loading) {
      dispatch({
        type: "update",
        results: employeeData,
      });
    }
  }, [employeeData, loading, initializeEmployeeData]);

  const searchInputRef = useRef("");

  const searchHandler = () => {
    async function initializeSearch() {
      await axios
        .get(
          process.env.REACT_APP_API_ROUTE + "/EmployeeList/GetEmployeesQuery",
          {
            params: {
              queryString: searchInputRef?.current?.value,
            },
          }
        )
        .then((res) => {
          setLoading(false);
          setEmployeeData(res.data);
        });
    }

    initializeSearch();
    dispatch({
      type: "query",
      query: searchInputRef?.current?.value,
    });
  };

  return (
    <div className={classes.page}>
      <SearchHeader
        searchHandler={searchHandler}
        searchInputRef={searchInputRef}
      />
      <div className={classes.loadingContainer}></div>
      <EmployeesCards employees={state.results} loading={loading} />
    </div>
  );
}

export default Employees;
