import React from 'react';

const Task = ({ task, onDeleteTask }) => {

  const handleDelete = () => {
    onDeleteTask(task.id);
  };

  return (
    <div>
      <li>
        {task.name}
        <input type="button" onClick={handleDelete} value="🗑️" />
      </li>
    </div>
  );
};

export default Task;
