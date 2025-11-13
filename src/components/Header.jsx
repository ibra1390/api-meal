import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='w-full bg-red-500 text-white'>
      <div className="flex items-center py-3 px-4">
        {/* logo */}
        <div className="w-[25%] flex justify-start">
          <img 
            src="/images/logo.png" 
            alt="logo" 
            className="w-20 h-20 object-cover rounded-full border-2 border-white"
          />
        </div>
        {/* Titulo */}
        <div className="text-center w-[50%]">
          <h1 className="text-3xl font-bold font-playfair">La Cocinita</h1>
          <p className="text-sm opacity-90 mt-1 hidden sm:block font-inter">Cooking with Passion</p>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-red-600 border-t border-red-300">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-8 py-2">
            <Link to="/" className="text-white px-4 py-2 rounded-lg transition-all duration-300 font-inter hover:scale-105">
              Home
            </Link>
            <button className="text-white px-4 py-2 rounded-lg transition-all duration-300 font-inter hover:scale-105">
              Categories
            </button>
            <Link to="/countries" className="text-white px-4 py-2 rounded-lg transition-all duration-300 font-inter hover:scale-105">
              Countries
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}