import { Link } from "react-router-dom"
import { useCart } from "../../hooks/useCart"
import { CartContext } from "../../context/cart";
import { useContext } from "react";
import useProducts from "../../hooks/useProducts";

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

      // function CartProduct({img1, price, title, quantity }: Product) {
      //   return
      // }

export const Cart = ({setOpenModal}: any) => {
   
  return (
    <>
      {/* {products.map(({img1, title, price, quantity}) => { */}
    <aside className='z-50 bg-slate-700  text-center w-3/4 sm:w-1/4 h-3/4 fixed right-0 '><p>Shopping Cart</p>
    <ul>
    <li>
    <img
      src='{img1}'
      alt='{title}'
    />

    <div className='bg-white m-12 text-slate-950'>
      <strong>jkl</strong> - jkl€
    </div>
    <footer>
      <small>
        Qty:jkl
      </small>
      <button>+</button>

    </footer>
  </li>
    
    </ul>
      <hr></hr>
      <button className="text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium
     rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"  onClick={() => setOpenModal(false)}>Close</button>
      <Link to="/checkout"> <button className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium
     rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" onClick={() => setOpenModal(false)}> Proceed to Checkout</button></Link>
    </aside>
    
      {/* }  */}
       )
{/* }) */}
</>
  )}

