import React from 'react';
import './TaskSummary.css'; // Import the CSS file

const TaskSummary = ({ tasks, completedTasks }) => {
  const totalTasks = tasks.length; // Total number of tasks
  const completedCount = Object.values(completedTasks).filter(Boolean).length; // Count of completed tasks

  return (
    <div className="task-summary">
      <h4 className="summary-title">Task Summary</h4>
      <p className="summary-text">Total Tasks: {totalTasks}</p>
      <p className="summary-text">Completed Tasks: {completedCount}</p>
    </div>
  );
};

export default TaskSummary;