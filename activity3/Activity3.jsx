import React from "react";

const Activity3 = ({ task, toggleTask, deleteTask }) => {
  return (
    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.8rem", margin: "0.5rem 0", backgroundColor: "#f5f5f5", borderRadius: "8px"}}>
      <span 
        style={{textDecoration: task.completed ? "line-through" : "none", color: task.completed ? "#888" : "#000"}}
        onClick={() => toggleTask(task.id)}
      >
        {task.task}
      </span>
      <button onClick={() => deleteTask(task.id)} style={{color: "red", border: "none", background: "none", cursor: "pointer", fontSize: "20px"}}>
        ×
      </button>
    </div>
  );
};

export default Activity3;