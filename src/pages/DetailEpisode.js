import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


const DetailEpisode = () => {
    const { idEpisode } = useParams()
    const [episode, setEpisode] = useState(null)
    const traerEpisode = async () => {
        try {
            let response = await axios.get(`https://rickandmortyapi.com/api/episode/${idEpisode}`)
            let datos = response.data
            setEpisode(datos)

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        traerEpisode()
    },[])
    return ( 
        <div className="containerDetail">
          <li>
                <Link to="/episodes"><h1>E P I S O D E S</h1></Link>
            </li>
            {episode && (
                <div className="detail" key={episode.id}>
                    <h3>Episode name: "{episode.name}"</h3>
                    <p>Season: {episode.episode}</p>
                    <p>Air date: {episode.air_date}</p>
                    <p>Total characters on episode: {episode.characters.length} </p>
                </div>
            )}
        </div>
    )
}

export default DetailEpisode