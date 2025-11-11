// App.jsx
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroCarousel from './components/HeroCarousel'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroCarousel />
        
        
      </main>
      
      <Footer />
    </div>
  )
}

export default App