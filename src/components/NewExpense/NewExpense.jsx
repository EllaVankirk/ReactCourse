import React from "react";
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {
  //this is a function we created that takes pulls the data up from the expense form. It will, in this case, expect our form data. Since we need to add an ID, we use the spread operator to add the previous data to our object, and add an ID. Then, in the ExpenseForm component, we will add props as an argument to our function, and then in the function that handles the data submitHandler, we call props.onSaveExpenseData(dataVariable) to pass the data into onSaveExpense in this component, which then points to the function below and tells it what to do. props.onAddExpense is for passing data up to the App.js where the same thing will happen.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  
  //in the ExpenseForm tag, we create a listener that then points to the above function to see the data.
  return (
    <div className="new-expense"> 
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />  
    </div>
  );
};

export default NewExpense;
