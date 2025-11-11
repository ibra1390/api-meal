import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApiMeal(endpoint) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const respuesta = await axios.get(`https://www.themealdb.com/api/json/v1/1/${endpoint}`)
                console.log(`${endpoint}:`, respuesta.data);
                setData(respuesta.data);
            } catch (error) {
                console.log("Error: no se pueden recuperar los datos", error)
            }
        }
        fetchData();
    }, [endpoint]);

    return data;
}