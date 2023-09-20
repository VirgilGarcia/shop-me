import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {

  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="addTask">
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du produit"
          value={newTask}
          onChange={handleInputChange}
        />
        <button type="submit">+</button>
      </form>
    </div>

  );
};

export default AddTaskForm;
