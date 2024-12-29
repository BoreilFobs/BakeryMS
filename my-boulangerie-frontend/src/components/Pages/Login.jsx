/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import logo from "../../assets/react.svg";
import { Navigate, useNavigate } from "react-router-dom";
import Alert from "../Alerts/Alert";
export default function Login() {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [errors, setErrors] = useState([]);
  const navigate = useNavigate();
  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate the inputes or log the errors in error array
    if (userName == "Admin" && password == "Admin") {
      navigate("/dashboard");
    } else if (
      userName != "Admin" &&
      userName &&
      password != "Admin" &&
      password
    ) {
      setErrors([...errors, "Invalid credentials"]);
      console.log();
    } else {
      if (!password) {
        setErrors([...errors, "Enter a Password"]);
      }
      if (!userName) {
        setErrors([...errors, "Enter a User Name"]);
      }
    }
  };
  return (
    <div className="login bg-login d-flex gap-5 position-relative justify-content-center align-items-center">
      <div className="errors-login position-absolute w-25 z-1 transition-2">
        {errors.map((error) => (
          <Alert key={error} error={error} />
        ))}
      </div>
      <form
        action=""
        method="post"
        className="w-auto p-5 h-auto d-flex flex-column align-items-center dark bglight rounded-5"
      >
        <img src={logo} className="form-login-img m-4" alt="" />
        <div className="name cursive text-center brown1 fs-4 fw-bold mb-4">
          Boulangerie de L&apos;esperance
        </div>
        <div className=" form-group mb-3">
          <label htmlFor="userName" className="mb-1 brown1 label-bakery">
            User Name
          </label>
          <input
            type="text"
            className="fs-6 form-control form-control-bakery"
            name="userName"
            id="userName"
            placeholder="User Name"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className=" form-group mb-3">
          <label htmlFor="password" className="brown1 mb-1 label-bakery">
            Password
          </label>
          <input
            type="password"
            className="form-control fs-6 form-control-bakery"
            name="password"
            id="password"
            placeholder="Enter password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="btn btn-bakery mt-2 button w-50"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
}
