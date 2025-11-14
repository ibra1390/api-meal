import React from 'react'
import { Link } from 'react-router-dom'

export default function HamburguesaMenu({ open, close }) {
  if (!open) return null

  return (
    <nav className="bg-red-600 sm:hidden border-t border-red-300">
      <div className="flex flex-col">
        <Link to="/" onClick={() => close(false)} className="text-white text-center py-2 border-b border-red-400">
          Home
        </Link>
        <button onClick={() => close(false)} className="text-white text-center py-2 border-b border-red-400">
          Categories
        </button>
        <Link to="/countries" onClick={() => close(false)} className="text-white text-center py-2 border-b border-red-400">
          Countries
        </Link>
        <Link to="/ingredients" onClick={() => close(false)} className="text-white text-center py-2">
          Ingredients
        </Link>
      </div>
    </nav>
  )
}
