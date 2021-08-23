import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./ExpenseRendering.css";
import "./ExpenseFilter.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

//This component brings in the ExpenseItem component to display all of the expenses. We call the ExpenseItem multiple times and pass in the data to each item.

function ExpenseRendering(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveFilterSelectionHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSaveFilterSelection={saveFilterSelectionHandler}
        />
        <ExpensesChart theExpenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default ExpenseRendering;
