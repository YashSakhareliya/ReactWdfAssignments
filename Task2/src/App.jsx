import { useState } from 'react'
import Greet from './components/Greet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Greet />
    </>
  )
}

export default App
