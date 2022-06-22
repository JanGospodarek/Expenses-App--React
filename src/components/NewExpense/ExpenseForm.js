import "./ExpenseForm.css";
import react, { useState } from "react";
function ExpenseForm(props) {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  function titleChangeHandler(event) {
    setEnterTitle(event.target.value);
  }
  function amountChangeHandler(event) {
    setEnterAmount(event.target.value);
  }
  function dateChangeHandler(event) {
    setEnterDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: +enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpenseData(expenseData);

    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enterTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enterAmount}
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enterDate}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.stopEditing}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
