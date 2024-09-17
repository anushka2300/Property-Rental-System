import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const loggedIn = await response.json();

      if (loggedIn) {
        // Save token to local storage or handle login state as needed
        localStorage.setItem('token', loggedIn.token);
        navigate("/");
      }
    } catch (err) {
      console.log("Login failed", err.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/assets/login.jpg")' }}>
      <div className="flex flex-col items-center gap-4 w-11/12 max-w-md p-8 bg-black bg-opacity-80 rounded-2xl">
        <form className="flex flex-col items-center gap-4 w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 text-center text-white bg-transparent border-b border-white/30 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 text-center text-white bg-transparent border-b border-white/30 outline-none"
          />
          <button
            type="submit"
            className="w-1/2 p-2 text-white bg-blue-500 rounded hover:shadow-lg"
          >
            LOG IN
          </button>
        </form>
        <a
          href="/register"
          className="text-white text-lg font-semibold hover:underline"
        >
          Don't have an account? Sign In Here
        </a>
      </div>
    </div>
  );
};

export default LoginPage;
