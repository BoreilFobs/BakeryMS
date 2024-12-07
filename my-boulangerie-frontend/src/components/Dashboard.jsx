/* eslint-disable no-unused-vars */
import React from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { ProgressBar } from "react-bootstrap";
import Testcode from "./Testcode";

export default function Dashboard() {
  return (
    <div className="dark fw-bold">
      <Testcode />
    </div>
  );
}
