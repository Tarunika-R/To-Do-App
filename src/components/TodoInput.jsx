const TodoInput = ({ task, setTask, onAddTask, isEditing, darkMode }) => {
    return (
      <div>
        {/* Input Field */}
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className={`w-full px-4 py-2 rounded focus:outline-none transition ${
            darkMode
              ? "bg-gray-200 text-black placeholder-gray-600"
              : "bg-gray-200 text-gray-900 placeholder-gray-600" //Light Mode
          }`}
          placeholder="Enter your task..."
        />
  
        {/* Add Task Button */}
        <button
          onClick={onAddTask}
          className={`mt-4 px-4 py-2 rounded shadow transition duration-300 ${
            darkMode
              ? "bg-pink-500 hover:bg-pink-600 text-white"
              : "bg-purple-500 hover:bg-purple-600 text-white"
          }`}
        >
          {isEditing ? "Update Task" : "Add Task"}
        </button>
      </div>
    );
  };
  
  export default TodoInput;
  