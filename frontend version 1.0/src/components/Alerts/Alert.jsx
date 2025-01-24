/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

function Alert(props) {
  return (
    <div className="error alert p-2 d-flex align-items-center gap-1 pointer user-select-none ps-3 w-100 alert-danger">
      {props.error}
      <i className="fa fa-exclamation fw-bold text-danger"></i>
    </div>
  );
}

export default Alert;
