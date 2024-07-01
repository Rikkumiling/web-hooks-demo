import { useEffect, useState } from "react";

export default function AddTask() {
  const [TaskName, setTaskName] = useState("");
  const [Text, setText] = useState("Sample Task");

  function clearStates(e) {
    e.preventDefault();
    setTaskName("Add New Task");
    setText("");
  }

  return (
    <div className="AddTaskContainer">
      <hr />
      <h2>Add Task</h2>
      <form>
        <div>
          <label>Task Name: </label>
          <input
            type="text"
            id="taskNameInput"
            value={TaskName}
            onChange={(e) => setTaskName(e.target.value)}
          ></input>
        </div>
        <div>
          <lable>Task: </lable>
          <input
            type="text"
            id="taskInput"
            value={Text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
        <button onClick={(e) => clearStates(e)}>Add Task</button>
      </form>
      <hr />
    </div>
  );
}
