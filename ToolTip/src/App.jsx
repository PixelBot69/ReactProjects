import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tool from './Components/ToolTip'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Tool content={"hello"} />
    </>
  )
}

export default App
