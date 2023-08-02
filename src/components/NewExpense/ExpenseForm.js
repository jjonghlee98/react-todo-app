import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  /* 첫 번째 방법 */
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const onTitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };

  const onAmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(enteredAmount);
  };

  const onDateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(enteredDate);
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

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onTitleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <inpu
            type="number"
            min="0.01"
            step="0.01"
            onChange={onAmountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={onDateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
