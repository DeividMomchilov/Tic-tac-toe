<<<<<<< Updated upstream
import { useState } from 'react'
import './App.css'
=======
import { useState, useEffect } from 'react';
import { calculateWinner } from './utils/calculateWinner';
import Scoreboard from './components/Scoreboard';
import Square from './components/Square';
>>>>>>> Stashed changes

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        Click
      </button>

      <p>Count: {count}</p>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  )
}

export default App
