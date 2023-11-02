import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'

const Characters = () => {
  const [characters, setCharacter] = useState([])
  const traerCharacter = async () => {
    try{
      let response= await axios.get(`https://rickandmortyapi.com/api/character`)
      let datos = response.data.results
      setCharacter(datos)
    }catch (error){
      console.log(error)
    }
  }
  useEffect(()=>{
    traerCharacter()
  }, [])
  return (
    <div>
      <h1>C H A R A C T E R S</h1>
      <div className="container">
        {characters.map(character => (
          <Card key={character.id} character={character}/>
        ))}
      </div>
    </div>
  )
}

export default Characters