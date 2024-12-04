import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';
import './App.css';
import TodoList from './TodoList'; // Import the TodoList 
import AddTodoForm from './AddTodoForm'; // Import the AddTodoForm


export default function App() {
  const [todoList, setTodoList] = useState([]); // use State for todo list

  // Add new todo to the list
  const handleAddTodo = (newTodo) => {
    setTodoList((prevList) => [...prevList, newTodo]); // Append a new todo
  };

  return (
    <div>
      <h1>Todo Application</h1>
      <AddTodoForm onAddTodo={handleAddTodo} /> {/* Pass the handler */}
      <TodoList items={todoList} /> {/* Pass the todo list */}
    </div>
  );
}
