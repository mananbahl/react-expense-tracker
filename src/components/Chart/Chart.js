import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...valueArray); // it requires arguments no. of arguments to find a max from, not array
  // ...spread operator lists array elements with x, y, z, (commas)
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};
export default Chart;
