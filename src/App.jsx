import { useState } from 'react'
import Home from './components/home'
import './App.css'

import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ToastContainer 
      position='top-center'
      reverseOrder={false}
      />
    </div>
     <div className='text-center font-bold text-4xl py-5'>Hello Inventory Management System</div>
     <Home/>
    </>
  )
}

export default App
