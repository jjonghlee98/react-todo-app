import React from "react";

import Card from "../UI/Card";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("Ko", { month: "long" });
  const day = props.date.toLocaleString("Ko", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
};

export default ExpenseDate;
