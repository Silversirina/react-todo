import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';

function AddTodoForm() {
  return (
    <form>
      <label htmlFor="todoTitle">Title</label> {/* Label for the input */}
      <input type="text" id="todoTitle" /> {/* Text input with matching id */}
      <button type="submit">Add</button> {/* Submit button */}
    </form>
  );
}

export default AddTodoForm;




import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import React from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [todoTitle, setTodoTitle] = useState(""); // State for the todo title

  // Handle the input change
  const handleChange = (e) => {
    setTodoTitle(e.target.value); // Update the state with input value
  };

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submit

    if (!todoTitle.trim()) return; // Prevent adding empty todos

    // Create a new todo object
    const newTodo = {
      title: todoTitle,
      id: Date.now(), // timestamped ID
    };

    // Pass the new todo to parent 
    onAddTodo(newTodo);

    // Reset the input field - clear todoTitle
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter todo"
        value={todoTitle}
        onChange={handleChange} // Handle the input change
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
