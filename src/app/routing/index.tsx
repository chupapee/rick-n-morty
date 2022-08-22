import { Route, Routes } from "react-router-dom"
import { Artists } from "../../pages/artists"
import { Records } from "../../pages/records"

export const Routing = () => {
  return <>
    <Routes>
      <Route path="/artist" element={<Artists />} />
      <Route path="/records" element={<Records />} />
    </Routes>
  </>
}