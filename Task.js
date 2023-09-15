import React from 'react';
import './Card.css'; // Create a CSS file for styling

const Task = ({ title, content }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Task;
