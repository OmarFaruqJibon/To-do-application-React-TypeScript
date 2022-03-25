import React from "react";

type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: Todo;
  handleDelete: (id: string) => void;
  handleCheck: (id: string) => void;
};

export const Row = ({
  todo: { task, isCompleted, id },
  handleDelete,
  handleCheck,
}: TodoProps) => {
  return (
    <div className="flex w-full p-4 justify-between items-center">
      
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => handleCheck(id)}
        className="form-checkbox h-5 w-5 text-green-500 mr-2"
      />
      <div className="w-full flex justify-between items-center">
        <p
          className={`
        ml-2 text-xl tracking-wide
        ${isCompleted && "text-gray-400 line-through"}
      `}
        >
          {task}
        </p>
        <button
          className="h-8 w-8 p-4 flex justify-center items-center border rounded-2xl bg-red-500 font-bold hover:bg-red-700"
          aria-label="Delete a todo"
          onClick={() => handleDelete(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};
