import Expense from "./components/Expense";
import ExpenseList from "./components/ExpenseList";
import { useState } from "react";
const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      desc: "Bill",
      amount: 12,
      category: "Utilities",
    },
    {
      id: 2,
      desc: "Pladj",
      amount: 9,
      category: "Entertainment",
    },
    {
      id: 3,
      desc: "sjksas",
      amount: 26,
      category: "Utilities",
    },
    {
      id: 4,
      desc: "aseds",
      amount: 18,
      category: "Work",
    },
  ]);
  return (
    <div>
      {/* <Expense /> */}
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
