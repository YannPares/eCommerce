import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { Merch,  } from "../pages/merch/Merch";
// import { HomePage } from "../pages/homePage";
import { Footer } from "../components/footer/Footer";
import { Vinyls } from "../pages/vinyls/Vinyls";
import { HomePage } from "../pages/homePage/homePage";
import { Extras } from "../pages/extras/Extras";
import { ProductPage } from "../pages/productPage/ProductPage"
import Checkout from "../pages/checkout/Checkout";
import LoginPage from "../pages/loginPage/LoginPage";

// const aboutSection = document.getElementById('aboutSection');

export const RoutesPath = () => {
  return (
  
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path="/" element={<HomePage/>}/> 
            <Route path="/merch" element={<Merch/>}/>
            <Route path="/vinyls" element={<Vinyls/>}/>
            <Route path="/extras" element={<Extras/>}/>            
            <Route path="/loginPage" element={<LoginPage/>}/>
            {/* <Route path="/cart" element={<CartPage/>}/> */}
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path='/merch/:id' element={<ProductPage/>} />
            <Route path='/extras/:id' element={<ProductPage/>} />
            <Route path='/vinyls/:id' element={<ProductPage/>} />
            <Route path="*" element={<Navigate replace to = '/'/>} />
        </Routes>
        <Footer/> 
    </BrowserRouter>
  )
}
