import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: "Jay's Birthday",
    amount: 10.12,
    date: new Date(2020, 2, 25),
  },
  {
    id: 'e2',
    title: "Ho's Birthday",
    amount: 15.12,
    date: new Date(2020, 6, 28),
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

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onAddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
