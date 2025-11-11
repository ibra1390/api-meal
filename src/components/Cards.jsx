import React from 'react'
import useApiMeal from "../hooks/useApiMeal"

export default function Cards() {
    /* const random = "random.php" */
    const porLetra = "search.php?f=b"
    const data = useApiMeal(porLetra)
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.meals?.slice(0, 9).map((meal) => (
                <div key={meal.idMeal} className="bg-white rounded-2xl shadow p-4 w-70">
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-xl mb-2" />
                    <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
                </div>
            ))}
        </div>
    )
}
