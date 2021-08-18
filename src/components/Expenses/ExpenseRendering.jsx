import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./ExpenseRendering.css";
import "./ExpenseFilter.css";

//This component brings in the ExpenseItem component to display all of the expenses. We call the ExpenseItem multiple times and pass in the data to each item.

function ExpenseRendering(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const saveFilterSelectionHandler = (filterYear) => {
    setFilteredYear(filterYear);
  };

  
  return (
    <div >
      <Card className="expenses">
           <ExpensesFilter selected={filteredYear} onSaveFilterSelection={saveFilterSelectionHandler} />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default ExpenseRendering;
