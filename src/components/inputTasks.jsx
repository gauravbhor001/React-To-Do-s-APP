import { useRef } from "react";

const InputTasks = ({ addTask }) => {
  const inputRef = useRef(null); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const inputValue = inputRef.current.value; 
    addTask(inputValue); 
    inputRef.current.value = ""; 
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <form onSubmit={handleSubmit} className="w-50">
        <input ref={inputRef} className="p-3 rounded-5 w-100" placeholder="Enter Your Task"/>
        <button type="submit" className="btn btn-primary mt-3 w-100">Add Task</button>
      </form>
    </div>
  );
};
export default InputTasks;
