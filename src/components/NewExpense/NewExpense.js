import "./NewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);

  function onSaveExpenseDataHandler(data) {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log(expenseData);
  }

  function stopEditingHandler() {
    setShowForm(false);
  }

  return (
    <div className="new-expense">
      {showForm === true ? (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          stopEditing={stopEditingHandler}
        ></ExpenseForm>
      ) : (
        <button onClick={() => setShowForm(true)}>Add new expense</button>
      )}
    </div>
  );
}

export default NewExpense;
