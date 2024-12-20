import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const todoList = [

  { id: 1, title: "Pet my puppy" },
  { id: 2, title: "Wash my car" },
  { id: 3, title: "Learn JavaScript" },

];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Todo List</h1>
      <ul>
        {todoList.map(function (item) {
          return <li key={item.id}>{item.title}</li>
        })}
      </ul>
    </>
  )
}


export default App
