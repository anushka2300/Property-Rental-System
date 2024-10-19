import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes,useParams } from 'react-router-dom';
import Home from './components/home';

import Property from './components/property/property';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';
import PropertyDescription from './components/property/propertyDescription'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const { collegeName } = useParams();
  const {propertyName}=useParams();
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/:collegeName" element={<Property />} />
        <Route path="/:collegeName/:propertyName" element={<PropertyDescription />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
