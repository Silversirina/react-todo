import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';


function AddTodoForm(props) {
  // form submission function
  function handleAddTodo(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve the value of title input
    const todoTitle = event.target.title.value;

    // Invoke the onAddTodo callback prop with the todo title
    props.onAddTodo(todoTitle);

    // Reset the form input
    event.target.reset();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="todoTitle">Title</label>
      <input type="text" id="todoTitle" name="title" />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;



