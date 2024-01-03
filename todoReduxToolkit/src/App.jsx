import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddToDo'
import Todos from './components/ToDos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>Learning about redux toolkit</h1>
        <AddTodo/>
        <Todos/>
       
    </>
  )
}

export default App
