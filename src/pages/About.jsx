import React from 'react';
import './Css/About.css'; // Import CSS for styling

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About ToDo'S App</h1>
      <p className="about-description">
        The ToDo'S App is a simple and efficient task management application designed to help users organize their daily tasks. 
        It allows users to add tasks, mark them as completed, and view a summary of their progress.
      </p>

      <h2 className="about-subtitle">Technologies Used</h2>
      <ul className="about-list">
        <li><strong>React:</strong> A JavaScript library for building user interfaces.</li>
        <li><strong>Bootstrap:</strong> A CSS framework for responsive and modern UI design.</li>
        <li><strong>CSS:</strong> Custom styles for additional design and layout improvements.</li>
        <li><strong>React Router:</strong> For navigation between pages.</li>
      </ul>

      <h2 className="about-subtitle">Features</h2>
      <ul className="about-list">
        <li>Add tasks to your to-do list.</li>
        <li>Mark tasks as completed with a checkbox.</li>
        <li>View a summary of total and completed tasks.</li>
        <li>Responsive design for mobile and desktop devices.</li>
        <li>Navigate between pages using React Router.</li>
      </ul>

      <h2 className="about-subtitle">Hooks Used</h2>
      <ul className="about-list">
        <li><strong>useState:</strong> Used to manage the state of tasks and completed tasks.</li>
        <li><strong>useRef:</strong> Used to reference the input field for adding tasks.</li>
      </ul>

      <h2 className="about-subtitle">Routing</h2>
      <p className="about-description">
        The project uses React Router for navigation between pages. It includes routes for the Home page, where users can manage their tasks, 
        and the About page, which provides information about the project. The navigation bar allows seamless switching between these pages.
      </p>

      <h2 className="about-subtitle">Project Structure</h2>
      <p className="about-description">
        The project is organized into the following structure:
      </p>
      <ul className="about-list">
        <li><strong>src/components:</strong> Contains reusable components like <code>InputTasks</code>, <code>ViewTask</code>, and <code>TaskSummary</code>.</li>
        <li><strong>src/pages:</strong> Contains the main pages of the app, such as <code>Home</code> and <code>About</code>.</li>
        <li><strong>src/pages/Css:</strong> Contains CSS files for styling individual pages.</li>
        <li><strong>src/App.jsx:</strong> The main entry point for routing and rendering components.</li>
      </ul>
    </div>
  );
};
