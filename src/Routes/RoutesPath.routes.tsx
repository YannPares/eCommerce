import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

export const RoutesPath = () => {
  return (
  
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/"></Route> 
            <Route path="/Merchandising" element={<div>Merchandising</div>}/>
            <Route path="/Vinils&CD" element={<div>Vinils&CD</div>}/>
            <Route path="/Accesories" element={<div>Accesories</div>}/>
            <Route path="*" element={<Navigate replace to = '/'/>} />
        </Routes>
    </BrowserRouter>
  )
}
