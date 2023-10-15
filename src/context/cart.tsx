import { useEffect, useState } from "react";
import { createContext } from "react";



type Product = {
    id: string;
    type: string;
    title: string;
    description: string;
    price: number;
    img1: string;
    img2: string;
    quantity: number;
}

type CartContextProps = {
    cart: Product[];
    addToCart: (product: Product) => void
    removeFromCart: (product: Product) => void
    clearCart: () => void
}

export const CartContext = createContext<CartContextProps | undefined>(undefined)


export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<Product[]>([])
    // const [CartCheckbox, setCartCheckbox] = useState<string>("")

    const addToCart = (product: Product) => {
        
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        
        if (productInCartIndex >= 0) {
            const newCart = [...cart]
            newCart[productInCartIndex].quantity += 1;
            setCart(newCart)
        } else {
            const newCart = [...cart, { ...product, quantity: 1 }]
            setCart(newCart)
        }
        
    };
    const removeFromCart = (product : Product) => {
        const deletedProductCart = cart.filter(item => item.id !== product.id)
        setCart(deletedProductCart)
    }


    useEffect(() => {
        const storeCart = localStorage.getItem("product");
        if (storeCart){
            setCart(JSON.parse(storeCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("product", JSON.stringify(cart));
    }, [cart]);
    
    const clearCart = () => {
        setCart([])
        // setCartCheckbox('');
        localStorage.removeItem("product");
    }
    

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}


