// components/HeroCarousel.jsx
import React, { useState } from 'react'

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200",
      title: "Deliciosas Recetas",
      description: "Descubre platillos increíbles"
    },
    {
      id: 2, 
      image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=1200",
      title: "Cocina Fácil",
      description: "Recetas paso a paso"
    }
  ]

  return (
    <div className="relative h-100 w-screen overflow-hidden">
    
      <div className="relative h-full">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-start text-white p-6">
          <h2 className="text-2xl font-bold mb-2">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg">
            {slides[currentSlide].description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

    </div>
  )
}