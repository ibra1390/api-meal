import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroCarousel from '../components/HeroCarousel'
import Grid from './Grid.jsx'

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="flex-1">
                <HeroCarousel />
            </main>
            <Grid />
            <Footer />
        </div>
    )
}
