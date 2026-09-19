import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Header from '../components/layout/Header'
import BottomNav from '../components/layout/BottomNav'
BottomNav

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="h-screen overflow-hidden">
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <BottomNav/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
