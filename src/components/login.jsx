import React from "react";
import Player from 'lottie-react'; // Use default import
import animationData from '../assets/nebula-login-lottie.json';
import LockData from '../assets/login-lock-lottie.json';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-between items-center bg-white p-5">
      {/* Left Section: Illustration */}
      <div className="w-1/2 h-full flex justify-center items-center">
        <div className="lottie-container w-full h-full">
          <Player
            autoplay
            loop
            animationData={animationData}
            className="h-60 w-60  md:w-full md:h-full"
          />
        </div>
      </div>

      {/* Right Section: Form */}
      <div className="w-full md:w-1/2 bg-white p-10 rounded-lg">
        <div className="lottie-container flex justify-center items-center mb-6">
          <Player
            autoplay
            loop
            animationData={LockData}
            className="h-48 w-48"
          />
        </div>
        <h1 className="text-4xl font-bold text-black mb-6 text-center -mt-3">Hackathon Portal</h1>      

        {/* Form */}
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              placeholder="••••••"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <a href="/login/forget-password" className="text-sm text-blue-500 hover:underline">
              Forget Password ?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#027f3f] text-white py-3 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
export default LoginPage; 