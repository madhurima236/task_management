import React, { useState } from "react";
import Header from "./Header";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import TaskStatusToggle from "./TaskStatusToggle";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const tasksToKeep = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksToKeep);
  };

  return (
    <div className="app">
      <Header />
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onUpdateTaskStatus={updateTaskStatus}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
