import { createContext, useState, useContext } from "react";
import Task from "../Components/Task";

export const TaskContext = createContext();

export function useTaskContext() {
  const TasksCont = useContext(TaskContext);
  const [Status, setStatus] = useState(TasksCont.Status);

  function changeStatus() {
    setStatus(!Status);
  }
  if (TasksCont === undefined) {
    throw new Error("useTaskContext must be used with a TaskContext");
  }
  return TasksCont;
}
