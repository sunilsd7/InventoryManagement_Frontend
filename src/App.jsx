import { useState } from 'react'
import Home from './components/home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='text-center font-bold text-4xl py-5'>Hello Inventory Management System</div>
     <Home/>
    </>
  )
}

export default App
