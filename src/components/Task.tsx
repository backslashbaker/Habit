import React, {useState} from "react";
import {DateTime} from "luxon";

interface Props {
  id: string;
  title: string;
  dueDate?: Date;
  completed: boolean;
}

const Task = (props: Props) => {
  const parseDueDate = DateTime.fromISO(props.dueDate?.toISOString());
  const [completed, setCompleted] = useState(props.completed);

  return (
    <>
      <h1>{props.title}</h1>
      <input type="checkbox" checked={completed} onChange={() => setCompleted(!completed)}/>
      <div >
        {parseDueDate.toFormat("d LLL yyyy")}
      </div>
    </>
  );
};

export default Task
