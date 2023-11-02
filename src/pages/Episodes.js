import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CardEpisode from '../components/CardEpisode'

const Episodes = () => {
  const [episodes, setEpisode] = useState([])
  const traerEpisode = async () => {
    try {
      let response = await axios.get(`https://rickandmortyapi.com/api/episode`)
      let datos = response.data.results
      console.log(datos)
      setEpisode(datos)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    traerEpisode()
  }, [])
  return (
    <div>
      <h1>E P I S O D E S</h1>
      <div className="container">
        {episodes.map(episode => (
          <CardEpisode key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  )
}

export default Episodes