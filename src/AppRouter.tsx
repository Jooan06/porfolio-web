import { BrowserRouter, Navigate, Route, Routes } from "react-router"
import { Home } from "./pages"
import { Trabajos } from "./pages/trabajos/Trabajos"
import { About } from "./pages/yo/About"
import { Contacto } from "./pages/Contacto/Contacto"



export const AppRouter = () => {

  return (
    <BrowserRouter basename="/porfolio-web"> 

      <Routes>

        <Route path="/" element={ <Home />} />

        <Route path="/trabajos" element={ <Trabajos/> } />

        <Route path="/about" element={ <About/> } />

        <Route path="/contacto" element={ <Contacto/> } />

        <Route path="*" element={ <Navigate to="/" />} />

      </Routes>

    </BrowserRouter>
  )
}
