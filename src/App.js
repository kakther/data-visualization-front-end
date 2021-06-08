import React from 'react';
import Nav from './components/Nav'
import Header  from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses  from './components/IncomeExpenses'
import TransactionList  from './components/TransactionList'
import AddForm  from './components/AddForm'



import './App.css';

function App() {
  return (
    <div>
      <Nav />    
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddForm />
      </div>
    </div>
  );
}

export default App;
