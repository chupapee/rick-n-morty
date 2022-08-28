import { Route, Routes } from "react-router-dom"
import { Albums } from "../../pages/albums"
import { Artists } from "../../pages/artists/index"
import { Cart } from "../../pages/cart"
import { Characters } from "../../pages/characters/index"

export const Routing = () => {
  return <>
    <Routes>
      <Route path="/characters" element={<Characters />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </>
}