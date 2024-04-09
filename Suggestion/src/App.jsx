import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sug from './Components/Sug'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Sug/>
  )
}

export default App
