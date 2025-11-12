import React, { useState } from 'react'
import Cards from "./Cards"

export default function Search({ setFiltro }) {
    const [valor, setValor] = useState("");
    return (
        <div className='flex items-center justify-center p-6 gap-1'>
            <input type="text" placeholder='Nombre...' className=' border-2 ' value={valor} onChange={(e) => { setValor(e.target.value) }} />
            <button onClick={() => { setFiltro(`search.php?s=${valor}`) }} className='flex border-none rounded-2xl bg-red-500 text-white p-2 hover:bg-red-400 cursor-pointer'>Buscar</button>
        </div>
    )
}
