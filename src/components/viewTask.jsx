import React from 'react';
import './viewTask.css';

export const ViewTask = ({ tasks, completedTasks, handleCheckboxChange }) => {
  return (
    <div className="task-list">
      <h3 className="task-list-title">Tasks</h3>
      <ul className="list-group">
        {tasks && tasks.length > 0 ? (
          tasks.map((task, index) => (
            <li key={index} className="list-group-item task-item">
              <input type="checkbox" className="form-check-input me-2" checked={!!completedTasks[index]} onChange={() => handleCheckboxChange(index)} />
              <span className={completedTasks[index] ? 'task-completed' : ''}>{task}</span>
            </li>
          ))
        ) : (
          <li className="list-group-item no-task">No task available</li>
        )}
      </ul>
    </div>
  );
};