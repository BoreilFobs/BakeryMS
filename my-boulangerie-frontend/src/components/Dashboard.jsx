/* eslint-disable no-unused-vars */
import React from "react";
import { VictoryChart, VictoryLine, VictoryTheme } from "victory";
import { ProgressBar } from "react-bootstrap";

export default function Dashboard() {
  return (
    <div className="dark fw-bold">
      <VictoryChart theme={VictoryTheme.clean}>
        <VictoryLine
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
          ]}
          style={{
            data: {
              stroke: "#8b46ff",
            },
          }}
        />
        <VictoryLine
          data={[
            { x: 1, y: 4 },
            { x: 2, y: 2 },
            { x: 3, y: 7 },
            { x: 4, y: 5 },
            { x: 5, y: 3 },
          ]}
          style={{
            data: {
              stroke: "#2d7ff9",
            },
          }}
        />
      </VictoryChart>
    </div>
  );
}
