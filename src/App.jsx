import Expense from "./components/Expense";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseList from "./components/ExpenseList";
import { useState, useEffect } from "react";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: 6,
      desc: "Movie Ticket",
      amount: 15,
      category: "Entertainment",
    },
    {
      id: 7,
      desc: "Electricity Bill",
      amount: 30,
      category: "Utilities",
    },
    {
      id: 8,
      desc: "Grocery Shopping",
      amount: 50,
      category: "Groceries",
    },
    {
      id: 9,
      desc: "Internet Bill",
      amount: 40,
      category: "Utilities",
    },
    {
      id: 10,
      desc: "Concert Tickets",
      amount: 60,
      category: "Entertainment",
    },
    {
      id: 11,
      desc: "Gas Bill",
      amount: 25,
      category: "Utilities",
    },
    {
      id: 12,
      desc: "Vegetable Shopping",
      amount: 30,
      category: "Groceries",
    },
    {
      id: 13,
      desc: "Restaurant Dinner",
      amount: 35,
      category: "Entertainment",
    },
    {
      id: 14,
      desc: "Phone Bill",
      amount: 45,
      category: "Utilities",
    },
    {
      id: 15,
      desc: "Clothing Shopping",
      amount: 75,
      category: "Entertainment",
    },
  ]);
  const [selectCategory, setSelectCategory] = useState("");

  const [visibleExpenses, setVisibleExpenses] = useState(expenses);

  useEffect(() => {
    if (selectCategory) {
      const filteredExpenses = expenses.filter(
        (expense) => expense.category === selectCategory
      );
      setVisibleExpenses(filteredExpenses);
    } else {
      setVisibleExpenses(expenses);
    }
  }, [selectCategory, expenses]);

  return (
    <div>
      {/* <Expense /> */}
      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setSelectCategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;
