import React from "react";

function TaskStatusToggle({ task, onUpdateTaskStatus }) {
    return (
        <button onClick={() => onUpdateTaskStatus(task.id)}>
            {task.status === "pending" ? "Done" : "Pending"}
        </button>
    );
}

export default TaskStatusToggle;