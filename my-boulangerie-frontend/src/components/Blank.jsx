// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Content from "./Content";

export default function Blank() {
  return (
    <div className=" d-grid row">
      <Navbar />
      <div className="d-flex ">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10 p-5 ">
          <Content />
        </div>
      </div>
    </div>
  );
}
