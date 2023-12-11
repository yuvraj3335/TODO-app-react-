import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { todoProvider } from './context'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo} , [...prev]])
  }
  const updateTodo = (id , todo ) => {
    setTodos((prev) => prev.map(() => ))
  } 
  return (
    <todoProvider value = {{todos ,addTodo ,updateTodo ,deleteTodo,ToggleComplete,}}>
     <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </todoProvider>
  )
}

export default App
