// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-light h55 d-flex justify-content-end gap-5 bshadowblack p-2 pe-5">
      <div className="d-flex align-items-center justify-content-between w-50">
        <div className="searchbar d-flex justify-content-center align-items-center gap-2">
          <input
            type="text"
            className="form-control border-0 bg-transparent outline-0"
            placeholder="Search the dashboard"
          />
          <i
            className="fa fa-search fs-4 fw-bold dark pointer"
            aria-hidden="true"
            onClick={() => {
              alert("clicked");
            }}
          ></i>
        </div>
        <div className="icons d-flex align-items-center justify-content-between gap-4 brown1">
          <BrowserRouter>
            <Link to="/">
              {" "}
              <i
                className="fas fa-home fs-5 pointer hover-dark brown1 transition-1"
                title="dashboard"
              ></i>
            </Link>
            <Link to="/messages">
              <i
                className="fa fa-bell fs-5 pointer hover-dark brown1 transition-1"
                aria-hidden="true"
              ></i>
            </Link>
            <Link to="/calendar">
              {" "}
              <i
                className="fa fa-calendar fs-5 pointer hover-dark brown1 transition-1"
                aria-hidden="true"
                title="calender"
              ></i>
            </Link>
            <Link to="/settings">
              <i
                className="fa fa-gear fs-3 pointer hover-dark brown1 transition-1"
                aria-hidden="true"
                title="Settings"
              ></i>
            </Link>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}
