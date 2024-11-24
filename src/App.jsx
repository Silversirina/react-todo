import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';

const todoList = [
  { id: 1, title: "Pet my doggies" },
  { id: 2, title: "Eat some veggies" },
  { id: 2, title: "Wash my car" },

];



function App() {
  return (

    <div>
      <h1>Todo List</h1>
      <ul></ul>
    </div>
  );
}

export default App;