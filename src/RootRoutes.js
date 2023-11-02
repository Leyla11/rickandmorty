import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Episodes from "./pages/Episodes"
import Characters from "./pages/Characters"
import DetailCharacter from "./pages/DetailCharacter"
import Locations from "./pages/Locations"
import DetailEpisode from "./pages/DetailEpisode"
import DetailLocation from "./pages/DetailLocation"

const RootRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/characters" element={<Characters/>}/>
        <Route path="/characters/:idCharacter" element={<DetailCharacter/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/episodes/:idEpisode" element={<DetailEpisode/>}/>
        <Route path="/locations" element={<Locations/>}/>
        <Route path="/locations/:idLocation" element={<DetailLocation/>}/>
    </Routes>
  )
}

export default RootRoutes