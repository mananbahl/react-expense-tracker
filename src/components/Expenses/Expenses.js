import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import Filter from "../UI/Filter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";
function Expenses(props) {
  const [thisYearSelected, setThisYearSelected] = useState("2023");
  const filterHandler = (props) => {
    setThisYearSelected(props);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === thisYearSelected;
  });
  return (
    <li>
      <Card className="expenses">
        <Filter
          selected={thisYearSelected}
          onChangeYear={filterHandler}
        ></Filter>
        <ExpenseChart expenses={filteredExpenses}></ExpenseChart>
        <ExpenseList items={filteredExpenses}></ExpenseList>
      </Card>
    </li>
  );
}
export default Expenses;
