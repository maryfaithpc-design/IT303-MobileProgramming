import React, { useState, useEffect } from "react";
import TaskItem from "./Activity3.jsx";
import data from "./task.json";
import { Link } from "react-router-dom";
import "./task.css";

function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    if (data) {
      setTasks(data);
    }
  }, []);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const newItem = {
      id: Date.now(),
      task: newTask,
      completed: false
    };
    setTasks([...tasks, newItem]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const allCompleted = tasks.length > 0 && tasks.every(t => t.completed);
  const somePending = tasks.some(t => !t.completed);

  return (
    <div className="todo-body">
      <Link to="/" className="back-btn">← Back to Home</Link>
      <div className="todo-container">
        <h1>To-Do List</h1>
        <div className="input-group">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What needs to be done?"
          />
          <button className="add-btn" onClick={addTask}>Add</button>
        </div>
        <div className="task-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-item">
              <button 
                className="check-circle-btn" 
                onClick={() => toggleTask(task.id)}
              >
                ○
              </button>
              <span className={`task-text ${task.completed ? "completed" : ""}`}>
                {task.task}
              </span>
              <button 
                className="delete-btn" 
                onClick={() => deleteTask(task.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="homework-check">
          {tasks.length === 0 && (
            <p className="check-message empty">No tasks added yet.</p>
          )}
          {allCompleted && (
            <p className="check-message done">All homework is done. Great job!</p>
          )}
          {somePending && (
            <p className="check-message pending">You still have unfinished tasks.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;