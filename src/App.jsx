import { useState } from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard/Dashboard'
import Admin from './pages/Admin/Admin'


function App() {

  return (

    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route element={< Login />} path='/' />
          <Route element={< Dashboard />} path='/dashboard' />
          <Route element={< Admin />} path='/admin' />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
