import { Link } from "react-router-dom"
import { useCart } from "../../hooks/useCart"
import { CartContext } from "../../context/cart";
import { useContext } from "react";

function CartProduct({img1, price, title }: Product) {
  return (
  <li>
    <img
      src={img1}
      alt={title}
    />

    <div className='bg-white m-12 text-slate-950'>
      <strong>{title}</strong> - {price}€
    </div>
    <footer>
      <small>
        {/* Qty: {quantity} */}
      </small>
      <button>+</button>

    </footer>
  </li>
  )
}
export const CartModal = ({ closeModal }) => {
  // const { cart, clearCart, addToCart} = useContext(CartContext); 

  return (
    <aside className='z-50 bg-slate-700  text-center w-3/4 sm:w-1/4 h-3/4 fixed right-0 '><p>Shopping Cart</p>
    <ul>
      {/* {cart.map(product =>
        <CartProduct key={product.id} {...product}/>)} */}
    </ul>
      <hr></hr>
      <button className="text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium
     rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"  onClick={() => closeModal(false)}>Close</button>
      <Link to="/checkout"> <button className="text-white bg-green-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium
     rounded-lg text-sm px-5 py-2.5 mr-2 mb-2" onClick={() => closeModal(false)}> Proceed to Checkout</button></Link>


    </aside>
  )
}

