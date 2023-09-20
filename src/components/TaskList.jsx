import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDeleteTask }) => {
  return (
    <div className="taskList">
      {tasks.length === 0 ? (
        <p>Aucun produit dans votre liste.. 😢</p>
      ) : (
        <div>
          <p>Il y a {tasks.length} produit(s) dans votre liste !</p>
          <ul>
            {tasks.map((task) => (
              <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskList;
