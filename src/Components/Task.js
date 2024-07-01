import { useState, useEffect } from "react";
import { useTaskContext } from "../Context/TaskContext";

export default function Task() {
  const TasksCont = useTaskContext();
  const [Status, setStatus] = useState(TasksCont.Status);

  useEffect(() => {
    console.log(TasksCont);
  }, [Status]);

  return (
    <div className="Task" key={TasksCont.TaskId}>
      {TasksCont.map((task) => (
        <div className="TaskContainer" key={task.TaskId}>
          <h2>{task.TaskName}</h2>
          <p>{task.Text}</p>
          <p>{Status ? "Complete" : "Incomplete"}</p>
          <button onClick={(e) => setStatus(!Status)}>
            {Status ? "Set to Incomplete" : "Set to Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}
