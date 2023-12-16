import { useState } from "react"

function App() {
  const [color, setColor] = useState("red") // use state hook 

  return (
    <div className= " w-full h-screen duration-200 "
      style={{backgroundColor: color}}
    >
      
      
    </div>
  )
}

export default App
