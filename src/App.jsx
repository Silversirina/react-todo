import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css';
import TodoList from './TodoList'; // Import the TodoList 
import AddTodoForm from './AddTodoForm'; // Import the AddTodoForm 

function App() {
  return (
    <>
      <h1>Todo Application</h1>
      <AddTodoForm />

      <TodoList />

    </>
  );
}

export default App;


