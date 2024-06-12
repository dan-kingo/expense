import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  desc: z
    .string()
    .min(3, { message: "Description should be at least 3 characters!" }),
  amount: z
    .number({ invalid_type_error: "Amount is required!" })
    .positive({ message: "Amount must be greater than zero" }),
  category: z
    .string()
    .refine((val) => val !== "", { message: "Category is required!" }),
});

const Expense = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(schema) });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="desc" className="form-label fw-bolder">
          Description
        </label>
        <input
          {...register("desc")}
          type="text"
          id="desc"
          placeholder="description"
          className="form-control"
        />
        {errors.desc && <p className="text-danger">{errors.desc.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label fw-bolder">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          id="amount"
          placeholder="amount"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label fw-bolder">
          Category
        </label>
        <select id="category" className="form-select" {...register("category")}>
          <option value="">Select category</option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <input type="submit" value="Submit" className="btn btn-primary" />
    </form>
  );
};

export default Expense;
