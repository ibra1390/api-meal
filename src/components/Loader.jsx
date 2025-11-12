import React from 'react'
import "../Styles/Loader.css"

export default function Loader() {
    return (
        <div className="loader">
            <div className="cup">
                <div className="cup-handle" />
                <div className="smoke one" />
                <div className="smoke two" />
                <div className="smoke three" />
            </div>
            <div className="load">Sin Filtrar...</div>
        </div>

    )
}
