import { useState } from "react";
import { createContext } from "react";
import { useActionData } from "react-router-dom";


  
export const CartContext = createContext<Cart>({} as Cart)


export function CartProvider({ children }: any) {
    const [cart, setCart] = useState([])

    const addToCart = (product:Product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity = +1
            setCart(newCart)
        }
    }
    setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    

const clearCart = () => {
    setCart([])
}

return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        clearCart
    }}
    >
        {children}
    </CartContext.Provider>
)
}


