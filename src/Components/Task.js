import { useState, useEffect } from "react";
import { useTaskContext } from "../Context/TaskContext";

export default function Task() {
  const TasksCont = useTaskContext;
  const [Status, setStatus] = useState(TasksCont.Status);

  useEffect(() => {
    console.log("Status Changed");
  }, [Status]);

  return (
    <div className="TaskContainer" key={TasksCont.TaskId}>
      <h2>{TasksCont.TaskName}</h2>
      <p>{TasksCont.Text}</p>
      <p>{Status ? "Complete" : "Incomplete"}</p>
      <button onClick={(e) => setStatus(!Status)}>
        {Status ? "Set to Incomplete" : "Set to Complete"}
      </button>
    </div>
  );
}
