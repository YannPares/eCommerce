import { useContext } from "react"
import { CartContext } from "../context/cart.tsx"


export const useCart = () => {
    const cart = useContext(CartContext)
    
    return cart;
    
}

