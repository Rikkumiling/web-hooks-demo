import { useState, useEffect } from "react";

export default function Task({ TaskObj }) {
  const [Status, setStatus] = useState(TaskObj.Status);

  useEffect(() => {
    console.log(TaskObj);
  }, [Status]);

  return (
    <div className="Task" key={TaskObj.TaskId}>
      <div className="TaskContainer" key={TaskObj.TaskId}>
        <h2>{TaskObj.TaskName}</h2>
        <p>{TaskObj.Text}</p>
        <p>{Status ? "Complete" : "Incomplete"}</p>
        <button onClick={(e) => setStatus(!Status)}>
          {Status ? "Set to Incomplete" : "Set to Complete"}
        </button>
      </div>
    </div>
  );
}
