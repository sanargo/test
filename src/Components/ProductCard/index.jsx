import { useContext } from "react";
import { ShoppingContext } from "../../Context/index";
import { AiOutlinePlusCircle } from "react-icons/ai";

function ProductCard({ image, state, title, price, product, active }) {
  const context = useContext(ShoppingContext);

  function addToCart(product) {
    context.setCount(context.count + 1);
    context.setProductsToCart([...context.productsToCart, product]);
  }

  return (
    <div className="w-72 m-4">
      <div className="relative">
        <img src={image} alt="title" />
        {active && (
          <AiOutlinePlusCircle
            className="w-8 h-8 bg-white rounded-full absolute top-3 right-3 cursor-pointer"
            onClick={() => {
              addToCart(product);
            }}
          />
        )}
        <span className="absolute bottom-2 left-2 p-1 bg-black text-white text-xs">
          {state}
        </span>
      </div>
      <div className="w-full text-center">
        <p className="text-xs mt-4 font-montserrat font-bold">{title}</p>
        <p className="text-xs mt-3 font-montserrat ">${price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
