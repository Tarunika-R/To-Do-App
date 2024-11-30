import React from "react";

function TodoItem({ task, index, onToggleCompletion, onEditTask, onDeleteTask }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded shadow-sm">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleCompletion(index)}
          className="mr-3"
        />
        <span
          className={`${
            task.completed ? "line-through text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-white"
          }`}
        >
          {task.text}
        </span>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onEditTask(index)}
          className="text-blue-500 dark:text-blue-400 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDeleteTask(index)}
          className="text-red-500 dark:text-red-400 hover:underline"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
