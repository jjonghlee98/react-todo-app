import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2023');

  /*
  let filterInfoText = '2019, 2020, 2021, & 2022';

  if (filterYear === '2023') {
    filterInfoText = '2019, 2020, 2021 & 2022';
  } else if (filterYear === '2022') {
    filterInfoText = '2019, 2020, 2021 & 2023';
  } else if (filterYear === '2021') {
    filterInfoText = '2019, 2020, 2022 & 2023';
  } else if (filterYear === '2020') {
    filterInfoText = '2019, 2021, 2022 & 2023';
  } else {
    filterInfoText = '2020, 2021, 2022 & 2023';
  }
  */

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // 처음엔 props로 넘어온 items를 활용했다면, filter() 메소드를 활용해서 분류작업을 하고난 후엔 filter() 메소드의 결과 데이터로 진행할 수 있다.
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
