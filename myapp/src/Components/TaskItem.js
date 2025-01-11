import React from "react";


function TaskItem({ task, onComplete, onDelete }) {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <span>{task.text}</span>
      <button onClick={onComplete}>✔</button>
      <button onClick={onDelete}>🗑</button>
    </div>
  );
}

export default TaskItem;

