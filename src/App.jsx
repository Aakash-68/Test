import { useState } from 'react'
import './css/App.css'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Fav from './pages/Fav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path= "/" element={<Home />}/>
        <Route path= "/favorites" element={<Fav />}/>
      </Routes>
    </>
  )
}

export default App
