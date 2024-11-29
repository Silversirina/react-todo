import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react';

function TodoListItem(props) {
  const { todo } = props; // Destructure props to get the todo object
  return <li>{todo.title}</li>; // Render the list item
}

export default TodoListItem;


