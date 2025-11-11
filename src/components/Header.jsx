import React from 'react'

export default function Header() {
  return (
    <header className='w-full flex items-center justify-between bg-red-500 py-3 px-4 text-white shadow-lg'>
      
      <div className="flex items-center">
        <img 
          src="/images/logo.png" 
          alt="logo" 
          className="w-24 h-24 object-cover rounded-full border-2 border-white shadow-lg"
        />
      </div>

      <div className="text-center flex-1">
        <h1 className="text-2xl font-bold font-playfair">La Cocinita</h1>
        <p className="text-sm opacity-90 mt-1 hidden sm:block font-inter">Recetas con pasión</p>
      </div>

      <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-md ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-red-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>

    </header>
  )
}