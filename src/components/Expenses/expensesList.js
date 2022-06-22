import "./expensesList.css";
import ExpenseItem from "./expenseItem";
function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
}
export default ExpensesList;
