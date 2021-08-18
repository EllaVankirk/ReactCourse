import React, { useState } from "react";

import "./ExpenseForm.css";


//here we pass in props so that we can pass the form data between the newExpense and this component.
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    //When taking user input, we can use the useState() to "save" the data that was input even if the component were to execute again.
    setEnteredTitle(event.target.value); // this is what to use when you update/change things by single value, this is a common approach.
    //  REFER TO THE BOTTOM FOR DIFFERENT WAYS OF HANDLING THE FORM DATA.
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //prevents request being sent and so prevents a page reload

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    //here we pass the data to the listener which points to our saveExpenseDataHandler function
    props.onSaveExpenseData(expenseData);
    setEnteredTitle(""); //resets the data after pressing submit
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
// this is what you use when you change one thing through the whole object. It depends on a snapshot of the previous state. Will fail in niche cases
    // setUserInput({  
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    //Third option: This will guarantee this will be the latest snapshot. Use this when your update depends on the previous update.
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });

export default ExpenseForm;
