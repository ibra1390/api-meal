import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApiMeal(endpoint) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        if (!endpoint) {
            return;
        }
        setLoading(true)
        axios(`https://www.themealdb.com/api/json/v1/1/${endpoint}`)
            .then((resp) => {
                setData(resp.data)
                console.log(resp.data)
            })
            .catch((err) => {
                setError(err);
            }).finally(() => {
                setTimeout(() => {
                    setLoading(false)
                }, 1500);

            })
    }, [endpoint]);

    return { data, loading, error }
}

