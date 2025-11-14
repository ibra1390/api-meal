import React, { useState } from 'react'
import useApiMeal from '../hooks/useApiMeal'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

export default function Categories() {
    const [selectedCategorie, setSelectedCategorie] = useState(null)
    const { data } = useApiMeal("categories.php")
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col overflow-x-hidden">
            <Header />
            <main className="flex-1 w-full">
                <div className="p-4">
                    <div className='max-w-6xl mx-auto'>
                        <h1 className='text-2xl font-bold font-inter text-center mb-8'>
                            Meals by category
                        </h1>
                        <div className='flex flex-col items-center justify-center mt-2 mb-6'>
                            <div className="w-full max-w-6xl mx-auto p-6 grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {data.categories?.map((cat) => (
                                    <div
                                        key={cat.idCategory}
                                        onClick={() => setSelectedCategorie(cat.strCategory)}
                                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col items-center p-4 w-48"
                                    >
                                        <img
                                            src={cat.strCategoryThumb}
                                            alt={cat.strCategory}
                                            className="rounded-xl w-32 h-32 object-cover mb-3"
                                        />
                                        <h2 className="text-base font-semibold text-center">{cat.strCategory}</h2>
                                    </div>
                                ))}
                            </div>

                            {selectedCategorie && (
                                <div>
                                    <h2 className='text-2xl font-bold font-inter text-center mb-6'>
                                        Category: {selectedCategorie}
                                    </h2>
                                    <Cards endpoint={`filter.php?c=${selectedCategorie}`} />
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
