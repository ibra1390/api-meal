import React, { useContext } from 'react'
import useApiMeal from "../hooks/useApiMeal"
import axios from 'axios' // un nuevo llamado a la API 
import { MealContext } from '../context/MealContext'  // agregado para enviar los datos a LectoREcetas
import { useNavigate } from 'react-router-dom' // agregado para hacer el cambio de pagina entre el home y LectoRecetas
import Loader from './Loader'


export default function Cards({ endpoint }) {
    const { data, loading, error } = useApiMeal(endpoint)
    if (error) {
        <p>error:{error}</p>
    }
    const { setSelectedMeal } = useContext(MealContext)
    const mealSelector = "search.php?s=" //la nueva API que contiene la información que LectoRecetas necesita  
    const nav = useNavigate() // para cambiar las paginas

    const selectMeal = async (mealName) => { // el nuevo llamado a la API con axios
        try {
            const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/${mealSelector}${mealName}`)
            setSelectedMeal(mealName);
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
                <div className="w-82 p-6 grid place-content-center grid-cols-1 sm:w-160 sm:grid-cols-2 lg:w-300 lg:grid-cols-4 gap-4">
                    {data.meals?.slice(0, 9).map((meal) => (
                        <div key={meal.idMeal} onClick={ // funcion onClick para seleccionar la receta, enviar los datos a LectoRecetas y mostrar al usuario la pagina LectoRecetas 
                            () => selectMeal(meal.strMeal)
                        } className="bg-white rounded-2xl shadow p-4 w-70 cursor-pointer">
                            <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-xl mb-2" />
                            <h2 className="text-lg font-semibold">{meal.strMeal}</h2>
                        </div>
                    ))}
                </div>}
        </>

    )
}
