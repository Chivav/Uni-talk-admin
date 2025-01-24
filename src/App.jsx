import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'


function App() {

  return (

    <BrowserRouter>
      <div>
        <Routes>
          <Route element={< Login />} path='/' />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
