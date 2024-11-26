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



