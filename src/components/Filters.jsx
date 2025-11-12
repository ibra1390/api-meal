import React, { useState } from 'react'
import useApiMeal from "../hooks/useApiMeal"
import useOpen from "../hooks/useOpen"

export default function Filters({ setFiltro }) {
    const categoria = "list.php?c=list"
    const area = "list.php?a=list"
    const ingredientes = "list.php?i=list"
    const dataCategoria = useApiMeal(categoria)
    const dataArea = useApiMeal(area)
    const dataIngrediente = useApiMeal(ingredientes)
    const open1 = useOpen();
    const open2 = useOpen();
    const open3 = useOpen();
    const [valor, setValor] = useState("");
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="flex flex-row items-center justify-center  mx-auto gap-5 ">
                <div className=''>
                    <button
                        onClick={() => {
                            open1.toggleDropdown();
                            open2.closeDropdown();
                            open3.closeDropdown();
                        }}
                        className=" bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-400 transition"
                    >
                        Categoría
                    </button>

                    {/* Dropdown con scroll */}
                    {open1.open && (
                        <div className=" mt-2 bg-white border rounded-xl shadow-lg max-h-48 overflow-y-auto absolute z-10">
                            {dataCategoria.data.meals?.map((cat, i) => (
                                <div
                                    key={i}
                                    onClick={() => {
                                        open1.closeDropdown();
                                        setFiltro(`filter.php?c=${cat.strCategory}`);
                                        setValor(cat.strCategory)
                                        console.log(cat.strCategory)
                                    }}
                                    className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                                >
                                    {cat.strCategory}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <button
                        onClick={() => {
                            open2.toggleDropdown();
                            open1.closeDropdown();
                            open3.closeDropdown()
                        }}
                        className="w-full bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-400 transition"
                    >
                        Area
                    </button>
                    {open2.open && (
                        <div className=" mt-2 bg-white border rounded-xl shadow-lg max-h-48 overflow-y-auto absolute z-10">
                            {dataArea.data.meals?.map((cat, i) => (
                                <div
                                    key={i}
                                    onClick={() => {
                                        open2.closeDropdown();
                                        setFiltro(`filter.php?a=${cat.strArea}`);
                                        setValor(cat.strArea)
                                    }}
                                    className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                                >
                                    {cat.strArea}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div>
                    <button
                        onClick={() => {
                            open3.toggleDropdown();
                            open1.closeDropdown();
                            open2.closeDropdown();
                        }}
                        className="w-full bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-400 transition"
                    >
                        Ingredientes
                    </button>
                    {open3.open && (
                        <div className=" mt-2 bg-white border rounded-xl shadow-lg max-h-48 overflow-y-auto absolute z-10">
                            {dataIngrediente.data.meals?.slice(0, 4).map((cat, i) => (
                                <div
                                    key={i}
                                    onClick={() => {
                                        open3.closeDropdown();
                                        setFiltro(`filter.php?i=${cat.strIngredient}`);
                                        setValor(cat.strIngredient)
                                    }}
                                    className="px-4 py-2 cursor-pointer hover:bg-blue-100"
                                >
                                    {cat.strIngredient}
                                </div>
                            ))}
                        </div>
                    )}
                </div>


            </div>
            <h2 className='text-2xl font-bold mt-5'>{valor || ""}</h2>
        </div>



    )
}
