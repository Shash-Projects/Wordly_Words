import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Saviour from './components/Saviour.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Saviour/>
     
     
    </>
  )
}

export default App
