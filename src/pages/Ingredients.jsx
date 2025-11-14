import React, { useState, useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Cards from '../components/Cards'
import useApiMeal from '../hooks/useApiMeal'
import LoaderPizza from "../components/LoaderPizza"

export default function Ingredients() {
    const { data, error, loading } = useApiMeal('list.php?i=list')
    const [selectedIngredient, setSelectedIngredient] = useState(null)
    const cardsRef = useRef(null)

    if (error) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col">
                <Header />
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-red-500 text-xl">Error: {error}</p>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1 w-full">
                <div className="p-4">
                    <div className='max-w-6xl mx-auto'>
                        <h1 className='text-2xl font-bold font-inter text-center mb-8'>
                            Meals by Ingredients
                        </h1>

                        {/* Ingredients Grid */}
                        <div className='flex flex-col items-center justify-center mt-2 mb-6'>
                            {loading && <LoaderPizza />}
                            {!loading &&
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 mb-8">
                                    {data.meals?.slice(0, 30).map(({ idIngredient, strIngredient }) => (
                                        <button
                                            key={idIngredient}
                                            onClick={() => {
                                                setSelectedIngredient(strIngredient)
                                                setTimeout(() => {
                                                    cardsRef.current?.scrollIntoView({ behavior: "smooth" })
                                                }, 200);

                                            }}
                                            className="flex flex-col items-center p-3 transition-all duration-200 hover:scale-105 cursor-pointer bg-red-800 rounded-lg shadow-md hover:shadow-lg"
                                        >
                                            <img
                                                src={`https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png`}
                                                alt={strIngredient}
                                                className="w-16 h-16 object-contain mb-2"
                                            />
                                            <span className='text-xs font-medium text-center text-white break-words'>
                                                {strIngredient}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            }


                            {selectedIngredient && (
                                <div ref={cardsRef}>
                                    <h2 className='text-2xl font-bold font-inter text-center mb-6'>
                                        Meals from {selectedIngredient}
                                    </h2>
                                    <Cards endpoint={`filter.php?i=${selectedIngredient}`} />
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