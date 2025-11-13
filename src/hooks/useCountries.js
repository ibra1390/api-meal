import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useCountries() {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        axios.get('/data/countries.json')
        .then(response => setCountries(response.data))
        .catch(error => console.error("Error al cargar paises:", error))    
    }, [])

  return countries
}
