import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const handleAddTask = () => {
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex].text = task;
      setTasks(updatedTasks);
      setEditingIndex(null);
    } else if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
    }
    setTask("");
  };

  const handleEditTask = (index) => {
    setTask(tasks[index].text);
    setEditingIndex(index);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredTasks =
    filter === "all"
      ? tasks
      : filter === "todo"
      ? tasks.filter((task) => !task.completed)
      : tasks.filter((task) => task.completed);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-teal-800 to-violet-900 text-white"
          : "bg-gradient-to-br from-pink-200 via-purple-100 to-blue-200 text-gray-800"
      } flex flex-col items-center p-6`}
    >
      {/* Glow Effect */}
      <div
        className={`absolute inset-0 ${
          darkMode
            ? "bg-indigo-800 opacity-20 blur-3xl"
            : "bg-pink-300 opacity-30 blur-3xl"
        }`}
      ></div>

      {/* Header */}
      <div className="relative z-10 w-full max-w-4xl flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold">To-Do List</h1>
        <button
          onClick={toggleTheme}
          className={`flex items-center px-4 py-2 rounded focus:outline-none transition duration-300 ${
            darkMode
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-pink-500 hover:bg-pink-600 text-white"
          }`}
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2m0 14v2m9-9h-2M5 12H3m16.364-7.364l-1.414 1.414M7.05 7.05 5.636 5.636M16.95 16.95l1.414 1.414M7.05 16.95l-1.414-1.414M12 7a5 5 0 100 10 5 5 0 000-10z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
              />
            </svg>
          )}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: TodoInput */}
        <TodoInput
          task={task}
          setTask={setTask}
          onAddTask={handleAddTask}
          isEditing={editingIndex !== null}
          darkMode={darkMode}
        />

        {/* Right Column: TodoList */}
        <TodoList
          tasks={filteredTasks}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
          onToggleCompletion={toggleTaskCompletion}
          filter={filter}
          onFilterChange={handleFilterChange}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}

export default App;
