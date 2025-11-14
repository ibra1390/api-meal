import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import LectoRecetas from './pages/LectoRecetas'
import Countries from './pages/Countries'
import Ingredients from './pages/Ingredients'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meal" element={<LectoRecetas />} /> {/*enlace para LectoRecetas*/}
            <Route path="/countries" element={<Countries/>} />
            <Route path="/ingredients" element={<Ingredients/>} />
        </Routes>
    )
}