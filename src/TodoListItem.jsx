import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";

const TodoListItem = ({ todo }) => { // Destructure the todo prop
  return <li>{todo.title}</li>; // Display the todo title
};

export default TodoListItem;
