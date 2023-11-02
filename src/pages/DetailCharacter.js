import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const DetailCharacter = () => {
    const { idCharacter } = useParams()
    const [character, setCharacter] = useState(null)
    const traerCharacter = async () => {
        try {
            let response = await axios.get(`https://rickandmortyapi.com/api/character/${idCharacter}`)
            let datos = response.data
            setCharacter(datos)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        traerCharacter()
    },)
    return (
        <div className='containerDetail'>
            <li>
                <Link to="/characters"><h1>C H A R A C T E R S</h1></Link>
            </li>
            {character && (
                <div className="detail" key={character.id}>
                    <h3>{character.name}</h3>
                    <img src={character.image} alt={character.name} />
                    <p>Status: {character.status}</p>
                    <p>Specie: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin.name}</p>
                    <p>Episodes: {character.episode.length}</p>
                </div>
            )}
        </div>
    )
}

export default DetailCharacter