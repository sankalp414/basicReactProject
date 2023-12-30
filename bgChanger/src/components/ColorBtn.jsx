import React from 'react'
import { useState } from 'react'
function ColorBtn({color}) {
    let [color,setColor]= useState('red')
  return (
    <div>
      <button
        onClick={()=> {color}} 
        className="outline-none px-4
        py-1 rounded-full text-white shadow-lg"
          style = {{backgroundColor: {color}}}>
        </button>
    </div>
  )
}

export default ColorBtn
