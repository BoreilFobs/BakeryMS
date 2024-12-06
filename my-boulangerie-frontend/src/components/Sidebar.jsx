/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";
export default function Sidebar() {
  const domain = "http://localhost:5173/";
  let [expand, setExpand] = useState(true);
  let [dashboard, setdashboard] = useState(true);
  let [orders, setorders] = useState(false);
  let [employees, setemployees] = useState(false);
  let [calendar, setcalendar] = useState(false);
  let [customers, setcustomers] = useState(false);
  let [offers, setoffers] = useState(false);

  const toggleSideBar = () => {
    setExpand(!expand);
  };
  console.log(expand);

  return (
    // class colaps to style the bar when closed
    <div
      className={`bgdark min-vh-100 position-relative bottom50 sidebar  transition-2 bshadow ${
        expand ? "" : "colapse"
      }`}
    >
      <div className="d-flex justify-content-between align-items-center px-4">
        {expand ? (
          <div className="logo fw-bold brown3 p-1  cursive fs-1">Logo</div>
        ) : (
          ""
        )}
        <i
          className={`fa-solid ${
            expand ? "fa-times" : "fa-bars"
          } mt-4 fs-4 pointer brown3`}
          onClick={() => {
            toggleSideBar();
          }}
        ></i>
      </div>
      <div className="pt-5 content d-flex text-light flex-column h-100">
        <ul className="d-flex gap-5 flex-column">
          <li>
            <Link
              to="/"
              className="link w-100 d-flex justify-content-start align-items-center position-relative"
              onClick={() => {
                setdashboard(true);
                setcalendar(false);
                setemployees(false);
                setoffers(false);
                setorders(false);
                setcustomers(false);
              }}
            >
              <OverlayTrigger
                placement={expand ? "" : "right"}
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="tooltip-id">Dashboard</Tooltip>}
              >
                <div
                  className={`fa fa-dashboard brown2 transition-2 ${
                    expand ? "fs-5" : "fs-4 hover-light"
                  }`}
                ></div>
              </OverlayTrigger>
              {expand ? (
                <span className="px-4 fs-5 fw-bold"> Dashboard</span>
              ) : (
                ""
              )}
              <div className="mrk">
                {dashboard && expand ? (
                  <i className="fa fa-circle light1"></i>
                ) : (
                  " "
                )}
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/Offers"
              className="link w-100 d-flex justify-content-start align-items-center position-relative"
              onClick={() => {
                setdashboard(false);
                setcalendar(false);
                setemployees(false);
                setoffers(true);
                setorders(false);
                setcustomers(false);
              }}
            >
              <OverlayTrigger
                placement={expand ? "" : "right"}
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="tooltip-id">Offers</Tooltip>}
              >
                <div
                  className={`fa fa-dashboard brown2 transition-2 ${
                    expand ? "fs-5" : "fs-4 hover-light"
                  }`}
                ></div>
              </OverlayTrigger>
              {expand ? <span className="px-4 fs-5 fw-bold"> Offers</span> : ""}
              <div className="mrk">
                {offers && expand ? (
                  <i className="fa fa-circle light1"></i>
                ) : (
                  " "
                )}
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/employees"
              className="link w-100 d-flex justify-content-start align-items-center position-relative"
              onClick={() => {
                setdashboard(false);
                setcalendar(false);
                setemployees(true);
                setoffers(false);
                setorders(false);
                setcustomers(false);
              }}
            >
              <OverlayTrigger
                placement={expand ? "" : "right"}
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="tooltip-id">Employees</Tooltip>}
              >
                <div
                  className={`fa fa-dashboard brown2 transition-2 ${
                    expand ? "fs-5" : "fs-4 hover-light"
                  }`}
                ></div>
              </OverlayTrigger>
              {expand ? (
                <span className="px-4 fs-5 fw-bold"> Employees</span>
              ) : (
                ""
              )}
              <div className="mrk">
                {employees && expand ? (
                  <i className="fa fa-circle light1"></i>
                ) : (
                  " "
                )}
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/customers"
              className="link w-100 d-flex justify-content-start align-items-center position-relative"
              onClick={() => {
                setdashboard(false);
                setcalendar(false);
                setemployees(false);
                setoffers(false);
                setorders(false);
                setcustomers(true);
              }}
            >
              <OverlayTrigger
                placement={expand ? "" : "right"}
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="tooltip-id">Customers</Tooltip>}
              >
                <div
                  className={`fa fa-dashboard brown2 transition-2 ${
                    expand ? "fs-5" : "fs-4 hover-light"
                  }`}
                ></div>
              </OverlayTrigger>
              {expand ? (
                <span className="px-4 fs-5 fw-bold"> Customers</span>
              ) : (
                ""
              )}
              <div className="mrk">
                {window.location.href == `${domain}customers` && expand ? (
                  <i className="fa fa-circle light1"></i>
                ) : (
                  " "
                )}
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              className="link w-100 d-flex justify-content-start align-items-center position-relative"
              onClick={() => {
                setdashboard(false);
                setcalendar(false);
                setemployees(false);
                setoffers(false);
                setorders(true);
                setcustomers(false);
              }}
            >
              <OverlayTrigger
                placement={expand ? "" : "right"}
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="tooltip-id">Orders</Tooltip>}
              >
                <div
                  className={`fa fa-dashboard brown2 transition-2 ${
                    expand ? "fs-5" : "fs-4 hover-light"
                  }`}
                ></div>
              </OverlayTrigger>
              {expand ? <span className="px-4 fs-5 fw-bold"> Orders</span> : ""}
              <div className="mrk">
                {orders && expand ? (
                  <i className="fa fa-circle light1"></i>
                ) : (
                  " "
                )}
              </div>
            </Link>
          </li>
          <li>
            <Link
              to="/calendar"
              className="link w-100 d-flex justify-content-start align-items-center position-relative"
              onClick={() => {
                setdashboard(false);
                setcalendar(true);
                setemployees(false);
                setoffers(false);
                setorders(false);
                setcustomers(false);
              }}
            >
              <OverlayTrigger
                placement={expand ? "" : "right"}
                delay={{ show: 250, hide: 400 }}
                overlay={<Tooltip id="tooltip-id">Calendar</Tooltip>}
              >
                <div
                  className={`fa fa-calendar brown2 transition-2 ${
                    expand ? "fs-5" : "fs-4 hover-light"
                  }`}
                ></div>
              </OverlayTrigger>
              {expand ? (
                <span className="px-4 fs-5 fw-bold"> Calendar</span>
              ) : (
                ""
              )}
              <div className="mrk">
                {calendar && expand ? (
                  <i className="fa fa-circle light1"></i>
                ) : (
                  " "
                )}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
