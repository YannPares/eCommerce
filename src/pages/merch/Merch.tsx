import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast"
import { useCart } from "../../hooks/useCart";


export const Merch = () => {
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

  return (
    <>
  
      <div className="mt-28 w-full flex justify-between align-middle gap-8 flex-wrap">
        {products && products.slice(0, 5).map(({ id, title, type, price, description, img1 }) => {

          const notify = () => toast(`${title} ${description}added to cart`);
          if (type === 'merch') {
            return (
              <> 
                <div className="m-3 border-white bg-slate-300 text-center" >
                  <ul className="bg-white">
                    <Link to={`${id}`} key={id}>
                      <li key={id}>
                        <img
                          src={img1}
                          alt={title}
                        />
                        <div>
                          <strong>{title}</strong> - {price}€
                        </div>

                      </li>
                    </Link>
                    <li>
                      <div className="flex justify-center bg-slate-400 bg-transparent w-96">
                      </div>
                      <button className="bg-slate-500 rounded-xl p-2 my-4" onClick={
                        // addToCart({id, title, img1}) && 
                        notify}>Add to cart<Toaster /></button>
                    </li>
                    <li>

                    </li>
                  </ul>

                </div>

              </>
            )
          }
        })}
      </div>
    </>
  )
}
