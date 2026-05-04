import { useState } from 'react'
import './App.css'

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
