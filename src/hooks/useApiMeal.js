import React from 'react'

export default function useFetchOnePiece(endpoint) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const respuesta = await axios.get(`https://api.api-onepiece.com/v2/${endpoint}/en`)
                console.log(`${endpoint}:`, respuesta.data);
                setData(respuesta.data);
            } catch (error) {
                console.log("Error: no se pueden recuperar los datos")
            }
        }
        fetchData();
    }, [endpoint]);

    return data;
}