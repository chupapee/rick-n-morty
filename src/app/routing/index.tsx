import { Route, Routes } from "react-router-dom"
import { Albums } from "../../pages/albums"
import { Artists } from "../../pages/artists/index"
import { Cart } from "../../pages/cart"
import { Charts } from "../../pages/charts/index"

export const Routing = () => {
  return <>
    <Routes>
      <Route path="/charts" element={<Charts />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  </>
}