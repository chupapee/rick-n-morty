import { Route, Routes } from "react-router-dom"
import { Episodes } from "../../pages/episodes/ui"
import { Artists } from "../../pages/artists/index"
import { Cart } from "../../pages/cart"
import { Characters } from "../../pages/characters/ui/index"

export const Routing = () => {
  return <>
    <Routes>
      <Route path="/characters" element={<Characters />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </>
}