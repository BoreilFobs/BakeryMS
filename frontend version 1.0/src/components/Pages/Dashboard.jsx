/* eslint-disable no-unused-vars */
import React from "react";
import Testcode from "../Testcode";
import Sidebar from "../Bars/Sidebar";
import Navbar from "../Bars/Navbar";

export default function Dashboard() {
  return (
    <div className="bg-img1 min-vh-100 min-vw-100 overflow-hidden">
      <div className="">
        <Navbar />
        <div className="d-flex flex-wrap gap-0">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main dashboard overflow-y-scroll">
            <Testcode />
          </div>
        </div>
      </div>
    </div>
  );
}
