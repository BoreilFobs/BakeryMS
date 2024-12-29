/* eslint-disable no-unused-vars */
import React from "react";
import img from '../assets/bg1.jpeg'
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryPie,
  VictoryTheme,
  VictoryTooltip,
} from "victory";

export default function Testcode() {
  return (
    <div className="d-flex gap-3 flex-wrap">
      <div className=" bglight rounded-4 transition-2">
        <VictoryChart
          domainPadding={{ x: 40 }}
          theme={VictoryTheme.material}
          animate={{ duration: 500 }}
        >
          <VictoryBar
            style={{
              data: { fill: "#4CAF50", width: 20 },
              labels: { fontSize: 12 },
            }}
            labelComponent={
              <VictoryTooltip
                style={{ fontSize: 10, fill: "#fff" }}
                flyoutStyle={{
                  fill: "#4CAF50",
                  stroke: "#333",
                  strokeWidth: 1,
                }}
              />
            }
            data={[
              {
                experiment: "trial 1",
                expected: 3.75,
                actual: 3.21,
              },
              {
                experiment: "trial 2",
                expected: 3.75,
                actual: 3.38,
              },
              {
                experiment: "trial 3",
                expected: 3.75,
                actual: 2.05,
              },
              {
                experiment: "trial 4",
                expected: 3.75,
                actual: 3.71,
              },
            ]}
            x="experiment"
            y={(d) => (d.actual / d.expected) * 100}
          />
          <VictoryAxis
            label="experiment"
            style={{
              axisLabel: { padding: 30 },
            }}
          />
          <VictoryAxis
            dependentAxis
            label="percent yield"
            style={{
              axisLabel: { padding: 40 },
            }}
          />
        </VictoryChart>
      </div>
      <div className="bglight">
        <VictoryPie
          radius={({ datum }) => datum.y + 75}
          data={[
            { x: "Cats", y: 30 },
            { x: "Dogs", y: 35 },
            { x: "Birds", y: 25 },
            { x: "Rabbits", y: 10 },
          ]}
          theme={VictoryTheme.clean}
          animate={{ duration: 500 }}
        />
      </div>
      <div class="card">
        <img class="card-img-top" src={img} />
        <div class="card-body">
          <h1 class="card-title">Title</h1>
          <p class="card-text">Text</p>
        </div>
      </div>
    </div>
  );
}
