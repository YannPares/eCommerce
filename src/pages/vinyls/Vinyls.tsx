import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Vinyls = () => {
  const [products, setProducts] = useState([])
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
        {products && products.map(({ id, title, price, description, img1, type }) => {
          if(type === 'vinyl'){
          return (
            <>
                <Link className="p-28 m-3 border-white bg-slate-300" to={`${id}`} key={id}>
                  <div>{title}</div>
                <ul>
                  <li>{price}</li>
                  <li>{description}</li>
                  <img src={img1} alt="loading image" />
                </ul>
                </Link>
                <div>
                  <button>-</button>
                  <input type="text" />
                  <button>+</button>
                  </div>
                <hr />
            </>
          )}
        })}
      </div>
    </>
  )
}
