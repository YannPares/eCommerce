import { useEffect, useState } from "react"


const useProducts = () => {
    const [products, setProducts] = useState([])
    // const { addToCart } = useCart()
  
    const url = 'http://localhost:3000/products'
    useEffect(() => {
      const getProducts = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data)
      }
      getProducts();
    }, [])
    
    return products;
}

export default useProducts