import React from "react";

const ExpenseFilter = ({ onSelect }) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">All Categories</option>
        <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
