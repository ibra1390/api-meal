import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LectoRecetas = () => {

    return(
    <div className='relative flex-flex-col items-cente justify-center'>
        <Header/>
        <div className="bg-[url('https://www.comfenalco.com.co/wp-content/uploads/2025/07/tamal.webp')] bg-center bg-cover bg-no-repeat w-screen h-[500px] flex flex-col items-center justify-center 
            relative">
            <div className="absolute inset-0 bg-black/15 flex items-center justify-center">
                <h1 className='inset-1 font-extrabold text-5xl text-white text-shadow-lg'>TAMALES TOLIMENSES</h1>
            </div>
        </div>
        <main>
            <div className='m-5 p-5 gap-5 bg-gray-200 flex flex-col items-center justify-around md:items-baseline md:flex-row'>
                <div className='flex flex-col items-center justify-baseline'>
                    <h2 className='font-extrabold text-3xl'>INGREDIENTES</h2>
                    <div className='grid grid-cols-2 gap-5 text-white'>
                        <div className=' bg-red-600 flex flex-col items-center justify-center p-3 size-50 rounded-2xl'>
                        <img src="https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-tomato-fresh-fruits-thumbnail.png" alt="tomate" />
                        <h3 className='font-bold'>TOMATE</h3>
                        <p>3 und.</p>
                        </div>
                        <div className=' bg-red-600 flex flex-col items-center justify-center p-3 size-50 rounded-2xl'>
                        <img src="https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-tomato-fresh-fruits-thumbnail.png" alt="tomate" />
                        <h3 className='font-bold'>TOMATE</h3>
                        <p>3 und.</p>
                        </div>
                        <div className=' bg-red-600 flex flex-col items-center justify-center p-3 size-50 rounded-2xl'>
                        <img src="https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-tomato-fresh-fruits-thumbnail.png" alt="tomate" />
                        <h3 className='font-bold'>TOMATE</h3>
                        <p>3 und.</p>
                        </div>
                        <div className=' bg-red-600 flex flex-col items-center justify-center p-3 size-50 rounded-2xl'>
                        <img src="https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-tomato-fresh-fruits-thumbnail.png" alt="tomate" />
                        <h3 className='font-bold'>TOMATE</h3>
                        <p>3 und.</p>
                        </div>
                        <div className=' bg-red-600 flex flex-col items-center justify-center p-3 size-50 rounded-2xl'>
                        <img src="https://w7.pngwing.com/pngs/891/45/png-transparent-tomato-tomato-fresh-fruits-thumbnail.png" alt="tomate" />
                        <h3 className='font-bold'>TOMATE</h3>
                        <p>3 und.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-baseline max-w-100'>
                    <h2 className='font-extrabold text-3xl'>PREPARACION</h2>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti perspiciatis eligendi quam officia, neque odio nulla illo, porro, ducimus similique ab ut. Magnam iure, tenetur deleniti ea eum cumque illum?</p>
                    </div>
                </div>
            </div>
        </main>
        <div className='size-50 w-full bg-black text-white text-center'>VIDEO</div>
        <Footer />
        <div className='fixed top-100 left-0 m-2'>
            <div className='size-10 rounded-full bg-red-600'></div>
            <div className='size-10 rounded-full bg-red-600'></div>
            <div className='size-10 rounded-full bg-red-600'></div>
        </div>
    </div>
    )
}

export default LectoRecetas;
