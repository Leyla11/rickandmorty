import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from 'axios'

const DetailLocation = () => {
    const {idLocation} = useParams()
    const [location, setLocation] = useState(null)
    const traerLocation = async () => {
        try{
            let response = await axios.get(`https://rickandmortyapi.com/api/location/${idLocation}`)
            let datos = response.data 
            setLocation(datos)
        }catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        traerLocation()
    }, [])

  return (
<div className="containerDetail">
    <li>
        <Link to="/locations"><h1>L O C A T I O N S</h1></Link>
    </li>
        {location && (
                <div className="detail" key={location.id}>
                    <h3>Name: {location.name}</h3>
                    <p>Type: {location.type}</p>
                    <p>Dimension: {location.dimension}</p>
                    <p>Total residents: {location.residents.length}</p>
                </div>
        )}
</div>

  )
}

export default DetailLocation
