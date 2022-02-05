import React from "react";
import {DateTime} from "luxon";

interface Props {
  id: string;
  title: string;
  dueDate?: Date;
  completed: boolean;
}

const Task = ({title, dueDate}: Props) => {
  const parseDueDate = DateTime.fromISO(dueDate?.toISOString())
  return (
    <>
      <h1>{title}</h1>
      <input type="checkbox" checked={false} onChange={() => {
      }}/>
      <div >
        {parseDueDate.toFormat("d LLL yyyy")}
      </div>
    </>
  );
};

export default Task
