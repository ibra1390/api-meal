import React, { useContext, useEffect, useState } from 'react'
import useApiMeal from "../hooks/useApiMeal"
import axios from 'axios' // un nuevo llamado a la API 
import { MealContext } from '../context/MealContext'  // agregado para enviar los datos a LectoREcetas
import { useNavigate } from 'react-router-dom' // agregado para hacer el cambio de pagina entre el home y LectoRecetas
import Loader from './Loader'


export default function Cards({ endpoint }) {
    const { data, loading, error } = useApiMeal(endpoint)
    const [visibleMeals, setVisibleMeals] = useState(10)
    useEffect(() => {
        setVisibleMeals(10)
    }, [endpoint])
    if (error) {
        <p>error:{error}</p>
    }
    const { setSelectedMeal } = useContext(MealContext)
    const mealSelector = "search.php?s=" //la nueva API que contiene la información que LectoRecetas necesita  
    const nav = useNavigate() // para cambiar las paginas

    const selectMeal = async (mealName) => { // el nuevo llamado a la API con axios
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/${mealSelector}${mealName}`)
            setSelectedMeal(res.data.meals[0]);
            console.log("Datos completos de la meal seleccionada:", res.data.meals[0])
            nav("meal/")
        } catch (error) {
            console.log("Error al obtener los datos de la receta:", error)
        }
    }

    return (
        <>
            {loading && <Loader />}
            {!loading &&
                <div className='flex flex-col items-center justify-center mt-2 mb-6'>
                    <div className="w-82 p-6 grid place-content-center grid-cols-1 sm:w-160 sm:grid-cols-2 lg:w-300 lg:grid-cols-4 gap-4">
                        {data.meals?.slice(0, visibleMeals).map((meal) => (
                            <div key={meal.idMeal} onClick={ // funcion onClick para seleccionar la receta, enviar los datos a LectoRecetas y mostrar al usuario la pagina LectoRecetas 
                                () => selectMeal(meal.strMeal)
                            } className="bg-white rounded-2xl shadow p-4 w-70 cursor-pointer font-inter flex flex-col">
                                <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-xl mb-2" />
                                <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
                            </div>
                        ))}
                    </div>
                    {data.meals && visibleMeals < data.meals.length && (
                        <div>
                            <button onClick={() => { setVisibleMeals(prev => prev + 6) }} className='bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-400 transition cursor-pointer font-inter'>See more</button>
                        </div>
                    )}

                    {!data.meals || data.meals.length === 0 ? (<div className="flex flex-col items-center justify-center h-64 text-center">
                        <p className="text-gray-500 font-semibold text-9xl opacity-60">
                            🍽️
                        </p>
                        <p className="text-gray-500 text-xl font-semibold mt-5">
                            Meals not founded
                        </p>
                        <p className="text-gray-400 mt-2 text-sm">
                            Please try with another filter.
                        </p>
                    </div>) : ""}
                </div>
            }
        </>

    )
}
