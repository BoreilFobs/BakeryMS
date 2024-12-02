import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Content from "./Content";

export default function Blank() {
  return (
    <div className=" d-grid row">
      <Navbar />
      <div className=" row">
        <div className="col-3 sidebar">
          <Sidebar />
        </div>
        <div className="col-9 p-5">
          <Content />
        </div>
      </div>
    </div>
  );
}
