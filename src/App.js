import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
function App() {
  const expenses=[
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
      title: "Lenskart",
      amount: 55,
      date: new Date(2023, 0, 17),
    }
  ];
  const addExpenseHandler=(expenseData)=>{
    console.log(expenseData);
    expenses={...expenseData}; //spread operator (...)
  };
  return(
    <div>
      <NewExpense addExpense={addExpenseHandler}></NewExpense> 
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
