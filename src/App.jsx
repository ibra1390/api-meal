import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import LectoRecetas from "./pages/LectoRecetas"

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Recetas" element={<LectoRecetas />} />
        </Routes>
    )
}