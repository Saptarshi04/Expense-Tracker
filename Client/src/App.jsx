import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
import React from 'react';

function App() {
  
  return (
<GlobalProvider>
<Header></Header>
<div className="container">
  <Balance></Balance>
  <IncomeExpense></IncomeExpense>
  <TransactionList></TransactionList>
  <AddTransaction></AddTransaction>
</div>
</GlobalProvider> );
}

export default App
