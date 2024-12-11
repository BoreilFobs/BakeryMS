import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Offers from "./components/Offers";
import Employees from "./components/Employees";
import Customers from "./components/Customers";
import Orders from "./components/Orders";
import Calendar from "./components/Calendar";
import Settings from "./components/Settings";
import Messages from "./components/Messages";
import Login from "./components/Login";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
