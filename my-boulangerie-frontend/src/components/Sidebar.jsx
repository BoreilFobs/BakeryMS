import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { Tooltip, OverlayTrigger, Button } from "react-bootstrap";
export default function Sidebar() {
  return (
    <div className="bgdark min-vh-100 position-relative bottom50  bshadow">
      <div className="d-flex justify-content-between align-items-center px-4">
        <div className="logo fw-bold brown3 p-1  cursive fs-1">Logo</div>
        <i
          className="fa-solid fa-bars fs-4 pointer brown3"
          onClick={() => {
            alert("clicked");
          }}
        ></i>
      </div>
      <div className="pt-5 content d-flex text-light flex-column h-100">
        <BrowserRouter>
          <Link
            to=""
            className=" w-100 py-3 fs-5 fst-italic bg-transparent border-1 border-black light1 text-decoration-none d-flex d-flex align-items-center justify-content-center gap-4 hover-light transition-2"
          >
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="tooltip-id">Dashboard</Tooltip>}
            >
              <Button className="text-light bg-transparent border-0">
                <i class="fas fa-landmark fs-5 light1 hover-light"></i>
              </Button>
            </OverlayTrigger>
            Employees
          </Link>
          <Link
            to=""
            className=" w-100 py-3 fs-5 fst-italic bg-transparent border-1 border-black light1 text-decoration-none d-flex d-flex align-items-center justify-content-center gap-4 hover-light transition-2"
          >
            <i class="fas fa-landmark    "></i>
            Orders
          </Link>
          <Link
            to=""
            className=" w-100 py-3 fs-5 fst-italic bg-transparent border-1 border-black light1 text-decoration-none d-flex d-flex align-items-center justify-content-center gap-4 hover-light transition-2"
          >
            <i class="fas fa-poll-people    "></i>
            Customers
          </Link>
        </BrowserRouter>
      </div>
    </div>
  );
}
