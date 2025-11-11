import React from 'react'

export default function BarraBusqueda() {
    return (
        <div className='flex items-center justify-center p-6 gap-1'>
            <input type="text" placeholder='Nombre...' className=' border-2 ' />
            <button className='flex border-none rounded-2xl bg-blue-600 text-white p-2 hover:bg-blue-500 cursor-pointer'>Buscar</button>
        </div>
    )
}
