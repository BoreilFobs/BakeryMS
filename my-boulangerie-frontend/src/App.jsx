import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Pages/Dashboard";
import Offers from "./components/Pages/Offers";
import Employees from "./components/Pages/Employees";
import Customers from "./components/Pages/Customers";
import Orders from "./components/Pages/Orders";
import Calendar from "./components/Pages/Calendar";
import Settings from "./components/Pages/Settings";
import Messages from "./components/Pages/Messages";
import Login from "./components/Pages/Login";
import AddEmp from "./components/Pages/AddEmp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/offers" element={<Offers />}></Route>
        <Route path="/employees" element={<Employees />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/calendar" element={<Calendar />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route path="/addEmp" element={<AddEmp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
