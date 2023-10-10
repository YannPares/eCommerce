import { useParams } from "react-router-dom";
import products from "../../assets/db.json"
import { FC } from "react";
import { TbShoppingCart } from "react-icons/tb";
import { ProductSlider } from "../../components/productSlider/productSlider";



export const ProductPage: FC = () => {

  const productsArray = products.products;
  const { id: productID } = useParams();
console.log(productID)
  const productsDetails = productsArray.find(({ id }) => id === productID)

  if (!productsDetails) return null;

  const { title, price, description, id, img1 } = productsDetails;

  return (
    <>
     <div className="mt-28 w-full flex justify-between align-middle gap-8 flex-wrap">
      <div className="p-8 m-3 border-white bg-slate-300" key={id}>
        <div>{title}</div>

        <ul>
          <li>{price}</li>
          <li>{description}</li>
          <img src={img1} alt="loading image" />
          <div className=" text-center">
                  <button>-</button>
                  <input type="text" />
                  <button>+</button>
        
                  <TbShoppingCart/>
          </div>

        </ul>
      </div>
      <hr />
      </div>
      {/* <ProductSlider/> */}
    </>
  )


}
