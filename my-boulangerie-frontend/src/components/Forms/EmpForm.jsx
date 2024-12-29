import React from "react";

function EmpForm() {
  return (
    <div className="bglight rounded brown1 p-4 w-75">
      <form action="" method="post">
        <div class="form-group">
          <label for="empName" className="label-bakery">
            Employee Name
          </label>
          <input
            type="text"
            name="empName"
            id="empName"
            class="form-control form-control-bakery"
            placeholder="Enter the Employee's name"
            aria-describedby="helpId"
          />
        </div>
      </form>
    </div>
  );
}

export default EmpForm;
