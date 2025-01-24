// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../Bars/Navbar";
import Sidebar from "../Bars/Sidebar";
import { Link } from "react-router-dom";
import EmpCard from "../Cards/EmpCard";
const Employees = () => {
  return (
    <div className="bg-img1 min-vh-100 min-vw-100 overflow-hidden">
      <div className="">
        <Navbar />
        <div className="d-flex gap-0">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main">
            <Link to="/addEmp">
              <button className="btn addempbtn align-item-center d-flex justify-content-center gap-3 text-decoration-none button btn-bakery">
                Create Employee{" "}
                <i
                  class="fa fa-plus text-success fs-3 fw-bold"
                  aria-hidden="true"
                ></i>
              </button>
            </Link>
            <div className="d-flex gap-2 flex-wrap">
              <EmpCard />
              <EmpCard />
              <EmpCard />
              <EmpCard />
              <EmpCard />
              <EmpCard />
              <EmpCard />
              <EmpCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employees;
