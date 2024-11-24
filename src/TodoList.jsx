import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import TodoListItem from './TodoListItem'; // Import TodoListItem 

const todoList = [ // todo list array
  { id: 1, title: "Pet my puppy" },
  { id: 2, title: "Wash my car" },
  { id: 3, title: "Learn JavaScript" },
];

function TodoList() {
  return (
    <>
      <h1>My Todo List</h1>
      <ul>
        {todoList.map((item) => (
          <TodoListItem key={item.id} todo={item} /> // Use TodoListItem component and pass key as prop
        ))}
      </ul>
    </>
  );
}

export default TodoList;



