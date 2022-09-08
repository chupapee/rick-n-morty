import { Navigate, Route, Routes } from "react-router-dom"
import { Episodes } from "../../pages/episodes/ui"
import { Cart } from "../../pages/cart/ui"
// import { Characters } from "../../pages/characters/ui/index"

export const Routing = () => {
  return <>
    <Routes>
      <Route path="/episodes" element={<Episodes />} />
      <Route path="/cart" element={<Cart />} />
      <Route index element={<Episodes />} />
      <Route path="*" element={<Navigate to="/episodes" replace />} />
    </Routes>
  </>
}