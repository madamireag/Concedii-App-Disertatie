import React, { useState, useEffect } from "react";
import VacationComponent from "./VacationComponent";
import axios from "axios";

const getHolidays = async () => {
  const resp = await axios.get(
    process.env.REACT_APP_API_ROUTE + "/ViewHolidays/GetHolidays",
    {
      params: {
        id: localStorage.getItem("userId"),
      },
    }
  );
  return resp;
};
function VacationsContainer() {
  const [holidays, setHolidays] = useState();
  useEffect(() => {
    async function initializeHolidays() {
      const result = await getHolidays();
      setHolidays(result);
      return result;
    }
    initializeHolidays();
  }, []);

  return (
    <VacationComponent arr={holidays ? holidays?.data : []}></VacationComponent>
  );
}

export default VacationsContainer;
