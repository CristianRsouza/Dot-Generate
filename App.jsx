import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [dot, setDot] = useState([])

  const HandleAditionDot = (e) => {
    const newDot = {
      clientX: e.clientX,
      clientY: e.clientY
    };
      setDot((prev) => [...prev, newDot])
  }
  
  return (
    <div className='app' onClick={HandleAditionDot}>
    {dot.map((dot) => 
      <span className='dot' style={{left: dot.clientX, top: dot.clientY}}></span>
      
      )}
    </div>
  )
}

export default App;
