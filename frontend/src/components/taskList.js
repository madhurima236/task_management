import React from "react";
import TaskItem from "./taskItem";

function TaskList({ tasks, onUpdateTaskStatus, onDeleteTask }) {

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onUpdateTaskStatus={onUpdateTaskStatus}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </div>
    )
}

export default TaskList;

