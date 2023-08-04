import React from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: "Jay's Birthday",
      amount: 10.12,
      date: new Date(1998, 2, 25),
    },
    {
      id: 'e2',
      title: "Ho's Birthday",
      amount: 15.12,
      date: new Date(1998, 6, 28),
    },
    {
      id: 'e3',
      title: 'Couple Day',
      amount: 20.12,
      date: new Date(2022, 9, 4),
    },
    {
      id: 'e4',
      title: 'Car Insurance',
      amount: 25.12,
      date: new Date(2023, 4, 22),
    },
  ];

  const onAddExpenseHandler = (expenses) => {
    console.log('In App.js');
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
