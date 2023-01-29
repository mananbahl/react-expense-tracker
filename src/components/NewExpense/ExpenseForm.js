import React from "react";
const ExpenseForm = () => {
return (
<form>
    <div className="form-fields">
        <div className="form-fields-title">
        <label>Title</label>
        <input type='text'></input>
        </div>

        <div className="form-fields-amount">
        <label>Amount</label>
        <input type='number' min='0.01' step={0.01}></input>
        </div>

        <div className="form-fields-date">
        <label>Date</label>
        <input type='date' min="2019-01-01" max="2023-12-31"></input>
        </div>
    </div>

    <div className="form-submit">
        <button type='submit'>Add Expense</button>
    </div>
</form>
);
};
export default ExpenseForm;