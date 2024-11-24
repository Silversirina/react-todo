import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';

const todoList = [ // Move todoList array to TodoList.jsx
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
          <li key={item.id}>{item.title}</li> // Dynamic list rendering
        ))}
      </ul>
    </>
  );
}

export default TodoList;


