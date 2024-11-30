import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ tasks, onEditTask, onDeleteTask, onToggleCompletion, filter, onFilterChange }) {
  return (
    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-black">Your Tasks</h2>
        <select
          value={filter}
          onChange={onFilterChange}
          className="border border-gray-300 dark:border-gray-600 rounded p-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
        >
          <option value="all">All Tasks</option>
          <option value="todo">To-Do Tasks</option>
          <option value="done">Done Tasks</option>
        </select>
      </div>
      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No tasks to show!
        </p>
      ) : (
        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              index={index}
              onToggleCompletion={onToggleCompletion}
              onEditTask={onEditTask}
              onDeleteTask={onDeleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
