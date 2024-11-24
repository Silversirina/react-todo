import React, { useState } from 'react'; // Correct single import
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {
  const [newTodo, setNewTodo] = useState('');

  return (
    <>
      <h1>Todo Application</h1>
      <AddTodoForm onAddTodo={setNewTodo} />
      <p>New Todo: {newTodo}</p>
      <TodoList />
    </>
  );
}

export default App;
