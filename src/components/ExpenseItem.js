import './ExpenseItem.css';  
function ExpenseItem(props){    //argument : properties array 
    const date=new Date(2023,18,0);
    const title='Diesel';
    const amount=300;
    return (
    <div className="expense-item">
        <div>{props.date.toISOString()}</div>
        <div className="expense-item-description">
            <h2>{props.title}</h2>
            <div className="expense-item-price">{props.amount}</div>
        </div>
    </div>
    );
}
export default ExpenseItem;