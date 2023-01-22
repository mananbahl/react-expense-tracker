import './ExpenseItem.css';  
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
function ExpenseItem(props){    //argument : properties array 
    
    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item-description">
            <h2>{props.title}</h2>
            <div className="expense-item-price">${props.amount}</div>
        </div>
    </Card>
    );
}
export default ExpenseItem;