import { useState } from 'react';
import backgroundImage from '/images/view2.jpg';


function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="w-full max-w-lg bg-white shadow-lg relative overflow-hidden rounded-lg">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        <div className="relative z-10 bg-blue-900 bg-opacity-90 p-10 text-white">
          <div className="flex justify-center mb-8">
            <input
              id="tab-1"
              type="radio"
              name="tab"
              className="hidden"
              checked={isSignIn}
              onChange={() => setIsSignIn(true)}
            />
            <label
              htmlFor="tab-1"
              className={`px-4 py-2 text-xl font-semibold cursor-pointer border-b-2 transition-all ${
                isSignIn ? 'border-blue-400' : 'border-transparent'
              }`}
            >
              Sign In
            </label>
            <input
              id="tab-2"
              type="radio"
              name="tab"
              className="hidden"
              checked={!isSignIn}
              onChange={() => setIsSignIn(false)}
            />
            <label
              htmlFor="tab-2"
              className={`px-4 py-2 text-xl font-semibold cursor-pointer border-b-2 transition-all ${
                !isSignIn ? 'border-blue-400' : 'border-transparent'
              }`}
            >
              Sign Up
            </label>
          </div>
          <div className="login-form">
            {isSignIn ? (
              // Sign In Form
              <div className="sign-in-htm">
                <div className="mb-4">
                  <label htmlFor="user" className="block text-sm font-medium">
                    Username
                  </label>
                  <input
                    id="user"
                    type="text"
                    className="w-full p-3 rounded bg-white bg-opacity-10 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="pass" className="block text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="w-full p-3 rounded bg-white bg-opacity-10 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="check"
                    type="checkbox"
                    className="mr-2 rounded text-blue-400 focus:ring-blue-400"
                  />
                  <label htmlFor="check" className="text-sm">
                    Keep me Signed in
                  </label>
                </div>
                <div>
                  <button className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-500 rounded-lg text-white">
                    Sign In
                  </button>
                </div>
                <div className="my-8 h-px bg-white bg-opacity-50"></div>
                <div className="text-center">
                  <a href="#forgot" className="text-sm text-white hover:text-blue-400">
                    Forgot Password?
                  </a>
                </div>
              </div>
            ) : (
              // Sign Up Form
              <div className="sign-up-htm">
                <div className="mb-4">
                  <label htmlFor="user" className="block text-sm font-medium">
                    Username
                  </label>
                  <input
                    id="user"
                    type="text"
                    className="w-full p-3 rounded bg-white bg-opacity-10 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="pass" className="block text-sm font-medium">
                    Password
                  </label>
                  <input
                    id="pass"
                    type="password"
                    className="w-full p-3 rounded bg-white bg-opacity-10 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="pass-repeat" className="block text-sm font-medium">
                    Repeat Password
                  </label>
                  <input
                    id="pass-repeat"
                    type="password"
                    className="w-full p-3 rounded bg-white bg-opacity-10 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="w-full p-3 rounded bg-white bg-opacity-10 text-white border-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <button className="w-full py-3 text-lg bg-blue-600 hover:bg-blue-500 rounded-lg text-white">
                    Sign Up
                  </button>
                </div>
                <div className="my-8 h-px bg-white bg-opacity-50"></div>
                <div className="text-center">
                  <label
                    htmlFor="tab-1"
                    className="text-sm text-white cursor-pointer hover:text-blue-400"
                    onClick={() => setIsSignIn(true)}
                  >
                    Already a Member?
                  </label>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
