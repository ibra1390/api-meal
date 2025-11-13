import React, { useContext } from 'react';
import useApiMeal from '../hooks/useApiMeal';
import mealSelecter from '../components/Cards';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MealContext } from '../context/MealContext';
import ReactPlayer from 'react-player';



const LectoRecetas = () => {
    const { selectedMeal } = useContext(MealContext)
    

    const videoUrl = selectedMeal?.strYoutube;
    const videoId = videoUrl?.split("v=")[1]; // extrae el ID del video
    const embedUrl = videoId? `https://www.youtube.com/embed/${videoId}`: null;

    return(
    <div className='relative flex-flex-col items-cente justify-center bg-gray-100'>
        <Header/>
        <div style= {{backgroundImage:`url(${selectedMeal.strMealThumb})`}} className=" bg-center bg-cover bg-no-repeat w-screen h-[500px] flex flex-col items-center justify-center 
            relative">
            <div className="absolute inset-0 bg-black/15 flex flex-col items-center justify-center">
                <h1 className='inset-1 font-extrabold text-5xl text-white text-shadow-lg text-center'>{selectedMeal.strMeal}</h1>
                <h2 className='font-bold text-white text-shadow-lg'>{selectedMeal.strCategory}</h2>
            </div>
        </div>
        <main className='flex justify-center'>
            <div className='my-5 py-5 gap-10 min-w-[384px] flex flex-col items-center justify-around lg:items-baseline lg:flex-row md:min-w-[860px]'>
                <div className='flex flex-col items-center justify-baseline'>
                    <h2 className='font-extrabold text-3xl py-5'>INGREDIENTS</h2>
                    <div className='grid grid-cols-2 gap-5 text-white md:grid-cols-3 lg:grid-cols-4'>
                        {Object.entries(selectedMeal).filter(([key, value])=>key.startsWith("strIngredient")&& value).map(([key, value], i)=>(
                                <div key={i} className=' bg-red-800 flex flex-col items-center justify-center w-40 h-50 rounded-2xl shadow-2xl'>
                                    <img src={`https://www.themealdb.com/images/ingredients/${value}-Small.png`} alt={value} className='size-[70%]' />
                                    <h3 className='font-bold text-center text-shadow-2xs'>{value}</h3>
                                    <p className='text-shadow-2xs'>{selectedMeal[`strMeasure${i+1}`]|| "al gusto"}</p>
                                </div>))}                 
                    </div>
                </div>
                <div className='flex flex-col items-center justify-baseline max-w-100'>
                    <h2 className='font-extrabold text-3xl py-5'>PREPARATION</h2>
                    <div>
                        <p className="whitespace-pre-line leading-normal w-80 md:w-100">{selectedMeal.strInstructions}</p>
                    </div>
                </div>
            </div>
        </main>
            {embedUrl ? (
                <div className='h-screen w-full bg-black text-white text-center flex '>
                <iframe
                    className="w-full h-full"
                    src={embedUrl}
                    title="Video de receta"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                </div>
            ) : (null)}
        
        <Footer />
        {/* <div className='fixed bottom-0 left-0 m-2'>
            <div className='size-10 rounded-full bg-red-600'></div>
            <div className='size-10 rounded-full bg-red-600'></div>
            <div className='size-10 rounded-full bg-red-600'></div>
        </div> */}
    </div>
    )
}

export default LectoRecetas;
