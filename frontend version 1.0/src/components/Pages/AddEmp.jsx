import React from "react";
import EmpForm from "../Forms/EmpForm";
function AddEmp() {
  return (
    <div className="bg-login min-vh-100 min-vw-100 overflow-hidden">
      <div className="main">
        <div className="dark d-flex align-item-center justify-content-center fw-bold">
          <EmpForm />
        </div>
      </div>
    </div>
  );
}

export default AddEmp;
