import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

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

  const filterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChange} />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
