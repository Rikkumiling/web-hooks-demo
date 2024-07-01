import React from "react";
import "./App.css";
import TaskManager from "./Components/TaskManager";
import AddTask from "./Components/AddTask";
import { TaskContext } from "./Context/TaskContext";

function App() {
  const sampleTask = [
    {
      TaskId: 0,
      TaskName: "Sample Task",
      Text: "Testing Text Chore, Lorem Ipsum",
      Status: true,
    },
    {
      TaskId: 1,
      TaskName: "Sample Task 2",
      Text: "Testing Text Chore Number 2, Lorem Ipsum",
      Status: true,
    },
  ];
  return (
    <div className="App">
      <TaskContext.Provider value={sampleTask}>
        <h1>To-do list</h1>
        <AddTask />
        <TaskManager />
      </TaskContext.Provider>
    </div>
  );
}

export default App;
