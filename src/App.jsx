import { useState } from 'react'
import Home from './components/home'; 
import './App.css'

import { ToastContainer } from 'react-toastify'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <ToastContainer 
     
      reverseOrder={false}
      />
    </div>
    
     <Home/>
    </>
  )
}

export default App
