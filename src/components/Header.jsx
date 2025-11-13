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
        {/* Searchbar */}
        <div className="w-[25%] flex justify-end">
          <div className="flex items-center bg-white rounded-full px-2 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="flex text-gray-800 outline-none text-sm w-24"
              value=""
            />
            <button className='text-red-500 hover:text-red-600 p-1 ml-1'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
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