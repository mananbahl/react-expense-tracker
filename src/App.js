import "./App.css";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
let DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "New Year Party",
    amount: 100,
    date: new Date(2023, 0, 1),
  },
  { id: "e2", title: "Social Work", amount: 50, date: new Date(2023, 0, 7) },
  {
    id: "e3",
    title: "Diesel",
    amount: 10,
    date: new Date(2023, 0, 13),
  },
  {
    id: "e4",
    title: "JHANTU",
    amount: 55,
    date: new Date(2023, 0, 17),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    }); //spread operator (...)
    console.log(expenses);
  };
  return (
    <div>
      <NewExpense addExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
