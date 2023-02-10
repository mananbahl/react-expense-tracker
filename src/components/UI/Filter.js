import React from "react";
import "./Filter.css";
const Filter = (props) => {
  const dropdownHandler = (event) => {
    props.onChangeYear(event.target.value);
  };
  return (
    <div className="filter">
      <div className="text">Filter by year</div>
      <div className="dropdown">
        <select
          className="custom-select"
          value={props.selected}
          onChange={dropdownHandler}
        >
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </div>
  );
};
export default Filter;
