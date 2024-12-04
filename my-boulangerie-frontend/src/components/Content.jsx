// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Offers from "./Offers";
import Employees from "./Employees";
import Customers from "./Customers";
import Orders from "./Orders";
import Calendar from "./Calendar";
import Settings from "./Settings";

export default function Content() {
  return (
    <div className="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Dashboard}></Route>
          <Route path="/offers" exact Component={Offers}></Route>
          <Route path="/employees" Component={Employees}></Route>
          <Route path="/customers" Component={Customers}></Route>
          <Route path="/orders" Component={Orders}></Route>
          <Route path="/calendar" Component={Calendar}></Route>
          <Route path="/settings" Component={Settings}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
