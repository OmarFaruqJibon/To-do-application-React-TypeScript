import React, { ChangeEvent, FormEvent } from "react";

type AddTodoProps = {
  task: string;
  handleChange: (e: ChangeEvent) => void;
  handleSubmit: (e: FormEvent) => void;
};

export const AddTodo = ({ task, handleChange, handleSubmit }: AddTodoProps) => {
  return (
    
    <form
      className="w-10/12 flex justify-between items-center mb-4"
      onSubmit={handleSubmit}
    >
      <input
        className=" w-10/12 flex rounded shadow p-2 text-gray-700"
        type="text"
        name="task"
        placeholder="Add todo..."
        value={task}
        onChange={handleChange}
      />
      <button
        className={`
            flex justify-center items-center h-10 w-10 text-lg font-bold rounded-3xl
            ${task === "" ? "bg-gray-400" : "bg-green-500"}
        `}
        aria-label="A submit button"
        type="submit"
      >
        +
      </button>
    </form>
  );
};
