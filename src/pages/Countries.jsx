import React, { useState, useEffect, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import useCountries from '../hooks/useCountries'
import LoaderPizza from "../components/LoaderPizza"

export default function Countries() {
    const paises = useCountries()
    const [selectedCountry, setSelectedCountry] = useState(null)
    const cardsRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, []);


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1 w-full">
                <div className="p-4">
                    <div className='max-w-6xl mx-auto'>
                        <h1 className='text-2xl font-bold font-inter text-center mb-8'>
                            Meals by Country
                        </h1>

                        {/* Flags Grid */}
                        <div className='flex flex-col items-center justify-center mt-2 mb-6'>
                            {loading && <LoaderPizza />}
                            {!loading &&
                                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 mb-8">
                                    {paises.map(({ area, flag }) => (
                                        <button
                                            key={area}
                                            onClick={() => {
                                                setSelectedCountry(area)
                                                setTimeout(() => {
                                                    cardsRef.current?.scrollIntoView({ behavior: "smooth" })
                                                }, 200);
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
                            }


                            {selectedCountry && (
                                <div ref={cardsRef}>
                                    <h2 className='text-2xl font-bold font-inter text-center mb-6'>
                                        Meals from {selectedCountry}
                                    </h2>
                                    <Cards endpoint={`filter.php?a=${selectedCountry}`} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}