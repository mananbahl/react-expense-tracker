import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
const expenses=[
{title : 'New Year Party', amount : 7000, date : new Date(2023,0,1)},
{title : 'Social work', amount : 3500, date : new Date(2023,0,2)},
{title : 'New Phone', amount : 150000, date : new Date(2023,0,12)},
{title : 'Lenskart', amount : 2000, date : new Date(2023,0,18)}
];
  return (
    <div className="App">
      <header className="App-header">
       <div> <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem> </div>
       <div> <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem> </div>
       <div> <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem> </div>
       <div> <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem> </div>
      </header>
     </div>
    
  );
}

export default App;
