import React, { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm = (props) => {

    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');


    const titleHandler=(events)=>{
        setEnteredTitle(events.target.value);
    };
    const amountHandler=(events)=>{
        setEnteredAmount(events.target.value);
    };
    const dateHandler=(events)=>{
        setEnteredDate(events.target.value);
    };

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate) 
        };
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        props.onSaveExpenseData(expenseData);
    };

return (
<form onSubmit={submitHandler}>
    <div className="form-fields">
        <div className="form-fields-control">
        <label>Title</label>
        <input type='text' value={enteredTitle} onChange={titleHandler}></input>
        </div>

        <div className="form-fields-control">
        <label>Amount</label>
        <input type='number' min='0.01' step={0.01} value={enteredAmount} onChange={amountHandler}></input>
        </div>

        <div className="form-fields-control">
        <label>Date</label>
        <input type='date' min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateHandler}></input>
        </div>
    </div>

    <div className="form-submit">
        <button type='submit'>Add Expense</button>
    </div>
</form>
);
};
export default ExpenseForm;