import React, { useState } from "react";

const ExpenseList = ({ expenses, onDelete }) => {
  if (expenses.length === 0) return null;
  return (
    <table className="table table-bordered p-3">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.desc}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th>
            $
            {expenses.reduce(
              (accumulator, expenses) => expenses.amount + accumulator,
              0
            )}
          </th>
          <th></th>
          <th></th>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
