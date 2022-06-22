import ExpenseItem from "./expenseItem";
import Card from "../UI/card";
import "./expenseItemsRender.css";
import ExpensesFilter from "../Filter/ExpenseFilter";
import React, { useState } from "react";
import ExpensesList from "./expensesList";
import ExpensesChart from "./expensesChart";

function ExpenseItemsRender(props) {
  const [year, setYear] = useState("2020");
  function filterChange(selectedYear) {
    setYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear().toString() === year
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={year}
          onFilter={filterChange}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
}
export default ExpenseItemsRender;
