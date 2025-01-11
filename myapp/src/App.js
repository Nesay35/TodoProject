import React, { useState } from "react";
import TaskItem from "./Components/TaskItem";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]); // Görevlerin tutulduğu state
  const [taskInput, setTaskInput] = useState(""); // Input alanındaki değer

  // Yeni bir görev ekleme
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput(""); // Input'u temizle
    }
  };

  // Görevi tamamlandı olarak işaretleme
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Görev silme
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app">
      <div className="header">
        <input
          type="text"
          placeholder="Add a new task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} // Input değerini güncelle
        />
        <button onClick={addTask}>+</button>
      </div>

      <div className="tasks">
        <h3>Tasks to do - {tasks.filter((task) => !task.completed).length}</h3>
        {tasks
          .filter((task) => !task.completed) // Tamamlanmamış görevler
          .map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onComplete={() => toggleComplete(index)}
              onDelete={() => deleteTask(index)}
            />
          ))}
      </div>

      <div className="completed">
        <h3>Done - {tasks.filter((task) => task.completed).length}</h3>
        {tasks
          .filter((task) => task.completed) // Tamamlanmış görevler
          .map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onComplete={() => toggleComplete(index)}
              onDelete={() => deleteTask(index)}
            />
          ))}
      </div>
    </div>
  );
}

export default App;