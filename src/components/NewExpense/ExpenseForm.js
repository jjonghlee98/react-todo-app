import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  /* 첫 번째 방법 */
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const onTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const onAmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const onDateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  /* 두 번째 방법 이전 상태에 의존해야 하는 경우에 사용 (예시: 카운터)
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const onTitleChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // prevState: 이전상태 스냅샷 (리액트가 항상 최신 상태의 스냅샷을 제공)
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
    console.log(userInput);
  };

  const onAmountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
    console.log(userInput);
  };

  const onDateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };
  */

  /* 또 다른 방법 ( 대안 )
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "date") {
      setEnteredDate(value);
    } else {
      setEnteredAmount(value);
    }
  }; */

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, // enteredAmount(x) / +enteredAmount(o)
      date: new Date(enteredDate),
    };

    // console.log(expenseData);

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle} // 양방향 바인딩(submit 후에 setEnteredTitle, Amount, Date를 공백으로 세팅 가능)
            onChange={onTitleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={onAmountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2023-12-31'
            value={enteredDate}
            onChange={onDateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
