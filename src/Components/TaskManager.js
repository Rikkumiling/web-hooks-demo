import { useEffect, useState } from "react";
import Task from "./Task";
import { useTaskContext } from "../Context/TaskContext";

function TaskManager() {
  const TasksCont = useTaskContext();

  useEffect(() => {}, []);
  return (
    <div className="TaskManager">
      {TasksCont.map((task) => (
        <Task />
      ))}
    </div>
  );
}

export default TaskManager;
