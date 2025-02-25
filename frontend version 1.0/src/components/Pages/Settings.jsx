// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "../Bars/Navbar";
import Sidebar from "../Bars/Sidebar";

const Settings = () => {
  return (
    <div className="bg-img1 min-vh-100 min-vw-100 overflow-hidden">
      <div className="">
        <Navbar />
        <div className="d-flex gap-0">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="main  overflow-y-scroll">
            <div className="dark fw-bold">settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
