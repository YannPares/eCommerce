import { useParams } from "react-router-dom";
import products from "../../assets/db.json"

import toast, { Toaster } from "react-hot-toast";

export const SearchBar: React.FC = () => {
    
    const { magicWord } = useParams<{magicWord?: string}>()
    const productsArray = products.products
    const productFind = productsArray.filter(product =>

    product.title.toLowerCase().includes({magicWord }).toLowerCase())
    productFind.map(({ id, title, price, description, img1 }) => {
    const notify = () => toast(`${title} ${description}added to cart`);   

        return (
            <div className="mt-28 w-full flex justify-between align-middle gap-8 flex-wrap">
            <div className="p-8 m-3 border-white bg-slate-300" key={id}>
              <div>{title}</div>
              <ul>
                <li>{price}</li>
                <li>{description}</li>
                <img src={img1} alt="loading image" />
                <div className=" text-center">
                <li>
                            <div className="flex justify-center bg-slate-400 bg-transparent w-96 p-">
                            </div>
                            <button className="bg-slate-500 rounded-xl p-2 mt-4" onClick={
                              // addToCart({id, title, img1}) && 
                              notify}>Add to cart<Toaster /></button> <br />
                           <button onClick={()=>{history.back()}} className="bg-slate-500 rounded-xl p-2 mt-2">Back</button>
                          </li>
                </div>
      
              </ul>
            </div>
            <hr />
            </div>
        )
     });
    
   return (
    <>
    
 
    
    </>)
}


