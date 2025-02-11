import { useState } from 'react'

import './App.css'
import JSXRules from './components/JSXRules'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <JSXRules />
    </>
  )
}

export default App
