import React from 'react'
import Filters from "./components/Filters.jsx"
import Cards from './components/Cards.jsx'
import Search from './components/Search.jsx'
export default function App() {
    return (
        <div>
            <Search></Search>
            <Filters></Filters>
            <Cards></Cards>
        </div>
    )
}
