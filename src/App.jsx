import React from 'react'
import useFetchOnePiece from './hooks/useFetchOnePiece'

export default function App() {
  const characters = useFetchOnePiece("characters");
  const crews = useFetchOnePiece("crews");
  
  return (
    <div>
      <h1>Personajes de one piece</h1>
      {characters.slice(0, 10).map(({id, name, job}) => (
        <div key={id}>
          <h3>{id}</h3>
          <h3>{name}</h3>
          <h3>{job}</h3>
        </div>
      ))}

      <h1>Tripulaciones</h1>
      {crews.slice(0,10).map(({id, name}) => (
        <div key={id}>
          <h3>{name}</h3>
        </div>
      ))}
    </div>
  )
}