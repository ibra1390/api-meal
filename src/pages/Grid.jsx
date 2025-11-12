import React, { useState } from 'react'
import Filters from "../components/Filters.jsx"
import Cards from '../components/Cards.jsx'
import Search from '../components/Search.jsx'
import Loader from "../components/Loader.jsx"
export default function Grid() {
    const [filtro, setFiltro] = useState("")
    return (
        <div>
            <Search setFiltro={setFiltro}></Search>
            <Filters></Filters>
            {filtro && <Cards endpoint={filtro}></Cards>}
            {!filtro && <Loader></Loader>}

        </div>
    )
}
