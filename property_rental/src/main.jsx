import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs"; // Import the AboutUs component
import "./index.css"; // Import Tailwind CSS

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Default route displays the home page */}
        <Route path="/" element={<Home />} />
        
        {/* About Us page route */}
        <Route path="/aboutus" element={<AboutUs />} /> {/* Add this route */}

        {/* Login page route */}
        <Route path="/login" element={<Login />} />
        
        {/* Optional: Redirect any unmatched routes to home page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
