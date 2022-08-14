import React from "react";

function Task({task, handleDelete}) {
  function onClickDelete() {
    handleDelete(task);
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={onClickDelete}>X</button>
    </div>
  );
}

export default Task;
