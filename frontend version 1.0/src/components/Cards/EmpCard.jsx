import React from "react";
import employeePic from "../../assets/user.jpg";
import "../../Styles/Empbtn.css";
function EmpCard() {
  return (
    <div className="emp-card bgbrown1 rounded pb-5 ">
      <div class="card bg-transparent border-0 border">
        <img class="card-img-top round-50 p-3" src={employeePic} alt="" />
        <div class="card-body">
          <h2 class="card-title dark fw-bold">Michel B Jordan</h2>
          <p class="card-text">Chef de production</p>
          <div className="morebtn">
            <div class="wrapper">
              <div className="link_wrapper">
                <div className="more">Hover Me!</div>
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 268.832 268.832"
                  >
                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpCard;
