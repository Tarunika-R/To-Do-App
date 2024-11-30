import React from "react";

function TodoItem({ task, index, onToggleCompletion, onEditTask, onDeleteTask }) {
  return (
    <li className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-3 rounded shadow-sm">
      <div className="flex items-center">
        {/* Custom Checkbox */}
        <label className="relative inline-flex items-center cursor-pointer mr-3">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggleCompletion(index)}
            className="sr-only peer" // Hides the default checkbox
          />
          <div
            className={`w-5 h-5 border-2 border-gray-400 dark:border-gray-600 rounded-sm flex items-center justify-center transition 
              peer-checked:bg-green-500 dark:peer-checked:bg-green-400 peer-checked:border-green-500 dark:peer-checked:border-green-400`}
          >
            {task.completed && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
        </label>

        {/* Task Text */}
        <span
          className={`${
            task.completed
              ? "line-through text-gray-500 dark:text-gray-400"
              : "text-gray-900 dark:text-white"
          }`}
        >
          {task.text}
        </span>
      </div>

      {/* Edit and Delete Icons */}
      <div className="flex items-center space-x-2">
        {/* Edit Icon */}
        <button
          onClick={() => onEditTask(index)}
          className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition"
          aria-label="Edit Task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L2.586 14.586A2 2 0 002 16v2a1 1 0 001 1h2c.53 0 1.039-.21 1.414-.586l12-12a2 2 0 000-2.828zM5 18H4v-1l9-9 1 1-9 9z" />
          </svg>
        </button>

        {/* Delete Icon */}
        <button
          onClick={() => onDeleteTask(index)}
          className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 transition"
          aria-label="Delete Task"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6 3a2 2 0 00-2 2v1h12V5a2 2 0 00-2-2H6zm9 4H5v9a2 2 0 002 2h6a2 2 0 002-2V7zM8 9a1 1 0 012 0v4a1 1 0 11-2 0V9zm4 0a1 1 0 012 0v4a1 1 0 11-2 0V9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
