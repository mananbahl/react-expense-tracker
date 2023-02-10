import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
function ExpenseItem(props) {
  //argument : properties array
  //use state is a function which accepts the value which have to be changed
  //it return an array consists of 1st element as the updated value and
  //second is a function which will be used to dynamically change the value
  // and most importantly to again call or reload the component.
  const [title, setTitle] = useState(props.title); //when executed again, the initial value props.title is being considered only for the first time.
  const clickHandler = () => {
    setTitle("Changed!");
    //title="Changed!"      //Even after changing the title old way, the component
    console.log(title); // will not call the JSX again, we have to use 'STATE'
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item-description">
        <h2>{props.title}</h2>
        <div className="expense-item-price">${props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
}
export default ExpenseItem;
