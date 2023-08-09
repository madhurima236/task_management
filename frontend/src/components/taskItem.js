import React from "react";
import TaskStatusToggle from "./taskStatusToggle";

function TaskItem({ task, onUpdateTaskStatus, onDeleteTask }) {
  return (
    <div className="task-item">
      <div className="task-item__title">
        <h3>{task.title}</h3>
        <TaskStatusToggle
          task={task}
          onUpdateTaskStatus={onUpdateTaskStatus}
        />
      </div>
      <p>{task.description}</p>
      <p>{task.dueDate}</p>
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;