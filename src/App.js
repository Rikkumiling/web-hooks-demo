import React from "react";
import "./App.css";
import TaskManager from "./Components/TaskManager";
import { TaskContextProvider } from "./Context/TaskContext";

function App() {
  return (
    <div className="App">
      <h1>To-do list</h1>
      <TaskContextProvider>
        <TaskManager />
      </TaskContextProvider>
    </div>
  );
}

export default App;
