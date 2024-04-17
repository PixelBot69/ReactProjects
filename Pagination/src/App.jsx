import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pagination from './Components/Pagination'
import PaginationTest from './Components/Pagination/text'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PaginationTest/>
 
    </>
  )
}

export default App
