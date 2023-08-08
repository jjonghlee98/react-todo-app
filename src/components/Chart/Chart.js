import React from 'react';

import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {
  const expenseValues = props.monthDatas.map((month) => month.value);
  const expenseMaxValue = Math.max(...expenseValues);

  return (
    <div className='chart'>
      {props.monthDatas.map((expenses) => (
        <ChartBar
          key={expenses.label}
          value={expenses.value}
          maxValue={expenseMaxValue}
          label={expenses.label}
        />
      ))}
    </div>
  );
};

export default Chart;
