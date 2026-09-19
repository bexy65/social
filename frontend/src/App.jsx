import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Header from '../components/layout/Header'
import BottomNav from '../components/layout/BottomNav'

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col overflow-hidden">

        <Header />

        {/* Every page automatically gets the available height + scrolling */}
        <main className="flex-1 min-h-0 overflow-y-auto">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <BottomNav />

      </div>
    </BrowserRouter>
  )
}

export default App
