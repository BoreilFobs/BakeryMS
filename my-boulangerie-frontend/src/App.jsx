import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Offers from "./components/Offers";
import Employees from "./components/Employees";
import Customers from "./components/Customers";
import Orders from "./components/Orders";
import Calendar from "./components/Calendar";
import Settings from "./components/Settings";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Messages from "./components/Messages";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-img1 min-vh-100 min-vw-100 overflow-hidden">
        <div className="">
          <Navbar />
          <div className="d-flex gap-0">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="main overflow-x-scroll">
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/offers" element={<Offers />}></Route>
                <Route path="/employees" element={<Employees />}></Route>
                <Route path="/customers" element={<Customers />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/calendar" element={<Calendar />}></Route>
                <Route path="/settings" element={<Settings />}></Route>
                <Route path="/messages" element={<Messages />}></Route>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
