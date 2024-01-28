import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../login/Login";
import DetailsComponent from "../../features/vacations/DetailsComponent";
import Employees from "../../features/employees/Employees";
import Employee from "../../features/employee/Employee";
import AddHolidayRequestContainer from "../addHolidayRequest/AddHolidayRequestContainer";
import RegisterContainer from "../../features/RegisterEmployee/RegisterContainer";
import HolidayHistoryContainer from "../../features/HolidayHistory/HolidayHistoryContainer";
import VacationsContainer from "../../features/vacations/VacationsContainer";
import MyProfile from "../../features/myProfile/MyProfile";
import HomePage from "../../features/HomePage/HomePage";
import PDFDocument from "../pdf/PDFDocument";

function AppRoutes() {
  return (
    <Routes>
      {!localStorage.getItem("userId") ? (
        <Route path="/" element={<LoginPage />} />
      ) : (
        <></>
      )}
      <Route path="/app/dashboard" element={<HomePage />} />
      <Route path="/app/addHoliday" element={<AddHolidayRequestContainer />} />
      <Route path="/app/register" element={<RegisterContainer />} />
      <Route path="/history" element={<HolidayHistoryContainer />} />
      <Route path="/app/holidays" element={<VacationsContainer />} />
      <Route path="/vacations/details/:id" element={<DetailsComponent />} />
      <Route path="/app/employees" element={<Employees />} />
      <Route path="/app/employee/:id" element={<Employee />} />
      <Route path="/app/profile/:id" element={<MyProfile />} />

      <Route path="/app/pdf/:id" element={<PDFDocument />} />
    </Routes>
  );
}

export default AppRoutes;
