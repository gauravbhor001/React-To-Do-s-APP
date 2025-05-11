import React, { useState } from 'react';
import InputTasks from '../components/inputTasks';
import { ViewTask } from '../components/viewTask';
import TaskSummary from '../components/TaskSummary'; 
import './Home.css'; 

export const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState({}); 

  const addTask = (e) => {
    if (e.trim() !== '') {
      setTasks([...tasks, e]); 
    }
  };

  const handleCheckboxChange = (index) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [index]: !prev[index], 
    }));
  };

  return (
    <div className="home-container">
      <div className="text-center my-4">
        <h1 className="app-title">ToDo'S App</h1>
        <p className="app-subtitle">Organize your tasks efficiently</p>
      </div>
      <div className="task-section">
        <InputTasks addTask={addTask} /> 
        <ViewTask tasks={tasks} completedTasks={completedTasks} handleCheckboxChange={handleCheckboxChange} /> 
        <TaskSummary tasks={tasks} completedTasks={completedTasks} />
      </div>
    </div>
  );
};
