import React from 'react'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useApiMeal from '../hooks/useApiMeal'
import useCountries from '../hooks/useCountries'

export default function Countries() {
    const paises = useCountries()
    // estado para seleccion de paises
    const [selectedCountry, setSelectedCountry] = useState(null)

  return (
    <div className="min-h-screen bg-gray-100">
        <Header />
            <main className="p-4">
                <div className='max-w-6xl mx-auto'>
                    <h1 className='text-2xl font-bold font-inter text-center mb-8'>
                        Meals by Country
                    </h1>
                    {/* Flags Grid */}
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 mb-8">
                        {paises.map(({area, flag}) =>(
                            <button
                                key={area}
                                onClick={() => {
                                    setSelectedCountry(area)
                                }}
                                className="flex flex-col items-center p-2 transition-all duration-200 hover:scale-105 cursor-pointer">
                                    <img
                                        src={flag}
                                        alt={area}
                                        className="w-12 h-8 object-cover mb-1"
                                    />
                                    <span className='text-xs font-medium text-center text-gray-700'>
                                        {area}
                                    </span>
                            </button>
                        ))}
                    </div>
                </div>
            </main>         
        <Footer />
    </div>
  )
}
