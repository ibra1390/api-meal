import React, { useState } from 'react'
import Cards from "./Cards"

export default function Search({ setFiltro }) {
    const [valor, setValor] = useState("");
    return (
        <div className='flex items-center justify-center p-6 mt-8'>
            <div className='flex items-center'>
                <input 
                    type="text" 
                    placeholder='Search your meal...' 
                    className=' border-2 border-gray-300 rounded-l-lg px-4 py-2 w-64 focus:outline-none focus:border-red-500' 
                    value={valor} onChange={(e) => { setValor(e.target.value) }} 
                />
                <button onClick={() => { setFiltro(`search.php?s=${valor}`) }} 
                    className='flex items-center justify-center rounded-r-lg bg-red-500 text-white px-4 py-2 hover:bg-red-400 cursor-pointer border-2 border-red-500'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
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
    )
}
