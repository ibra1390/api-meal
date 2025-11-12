import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import LectoRecetas from './pages/LectoRecetas'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meal" element={<LectoRecetas/>}/> {/*enlace para LectoRecetas*/
        </Routes>
    )
}