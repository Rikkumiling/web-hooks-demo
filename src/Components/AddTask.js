import { useEffect, useState, useRef } from "react";

export default function AddTask({ onAddTask }) {
  const [TaskName, setTaskName] = useState("");
  const [Text, setText] = useState("Sample Task");
  const inputRef = useRef(null);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (Text.trim() === "") return;

    onAddTask(Text, TaskName);
    setTaskName("");
    setText("");
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus(); // Focus the input field on component mount
  }, []);

  return (
    <div className="AddTaskContainer">
      <hr />
      <div className="AddTaskContainer2">
        <h2>Add Task</h2>
        <form className="AddTaskForm">
          <div className="AddTaskFormDiv">
            <label>Task Name: </label>
            <input
              type="text"
              id="taskNameInput"
              ref={inputRef}
              value={TaskName}
              onChange={(e) => setTaskName(e.target.value)}
            ></input>
          </div>
          <div className="AddTaskFormDiv">
            <lable>Task: </lable>
            <input
              type="text"
              id="taskInput"
              value={Text}
              onChange={(e) => setText(e.target.value)}
            ></input>
          </div>
          <button onClick={(e) => handleAddTask(e)}>Add Task</button>
        </form>
      </div>
      <hr />
    </div>
  );
}
