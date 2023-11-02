import { useEffect, useState } from "react"
import CardLocation from "../components/CardLocation"
import axios from "axios"

const Locations = () => {
  const [locations, setLocation] = useState ([])
  const traerLocation = async () => {
    try {
      let response = await axios.get(`https://rickandmortyapi.com/api/location`)
      let datos = response.data.results
      setLocation(datos)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    traerLocation()
  },[])
  return (
    <div>
      <h1>L O C A T I O N S</h1>
      <div className="container">
        {locations.map(location => (
          <CardLocation key={location.id} location={location}/>
        ))}
      </div>
    </div>
  )
}

export default Locations