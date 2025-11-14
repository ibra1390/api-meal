import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HamburguesaMenu from './HamburguesaMenu'

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className='w-full bg-red-500 text-white'>
      <div className="flex items-center justify-between py-3 px-4">
        {/* logo */}
        <div className="">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border-2 border-white"
          />
        </div>
        {/* Titulo */}
        <div className="flex-1 text-center px-4">
          <h1 className="text-2xl sm:text-3xl font-bold font-playfair">La Cocinita</h1>
          <p className="text-sm opacity-90 mt-1 hidden sm:block font-inter">Cooking with Passion</p>
        </div>
        {/* Boton Anvorguesa */}
        <button onClick={() => setOpen(!open)} className="text-2xl p-2 sm:hidden">
          {open ? '✕' : '☰'}
        </button>

        <div className="w-16 hidden sm:block"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-red-600 border-t border-red-300 hidden sm:block">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-4 sm:space-x-8 py-2">
            <Link to="/" className="text-white px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 font-inter hover:scale-105">
              Home
            </Link>
            <Link to="/categories" className="text-white px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 font-inter hover:scale-105">
              Categories
            </Link>
            <Link to="/countries" className="text-white px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 font-inter hover:scale-105">
              Countries
            </Link>
            <Link to="/ingredients" className="text-white px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 font-inter hover:scale-105">
              Ingredients
            </Link>
          </div>
        </div>
      </nav>
      {/* Abrir menu en movil */}
      <HamburguesaMenu open={open} close={setOpen} />
    </header>
  )
}