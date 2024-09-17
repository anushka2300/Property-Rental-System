import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';

import Property from './components/property/property';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/property" element={<Property />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
