import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)

  // let counter = 5;

  const addvalue = ()=>{
     if(counter<20){

     counter = counter +1
     setCounter(counter)
     }
  }
  const decreasevalue = ()=>{
    if(counter>0){
    counter = counter-1
    setCounter(counter)
    }
  }
  return (
    <>
      <h1> Hi sankalp Sharma</h1>
      <h2> Counter Value: {counter}</h2>

      <button onClick={addvalue}>add value</button>
      <br />
      <button onClick={decreasevalue}>decrease value</button>
      
    </>
  )
}

export default App
