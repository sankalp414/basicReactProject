import { useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(12)
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [characterAllowed,setCharacterAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = ()=>{}

  return (
    <>
      <h1 className='text-center text-white text-4xl'>Password Generator</h1>

    </>
  )
}

export default App
