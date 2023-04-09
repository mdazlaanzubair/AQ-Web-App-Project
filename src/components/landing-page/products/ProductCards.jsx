import { useCartContext } from "../../../context/cart/CartContext";

const ProductCards = ({ products }) => {
  const { setCartProduct } = useCartContext();

  return products?.map((product, index) => (
    <div key={index} className="card bg-base-100 w-full bordered">
      <figure>
        <img src={product?.img} alt="Shoes" className="h-60 w-120" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product?.name}</h2>
        <p className="text-sm flex flex-row justify-between">
          <span>Price ($)</span>
          {product?.price}
        </p>
        <div className="card-actions justify-center">
          <button
            htmlFor="purchase_form"
            className="btn btn-ghost btn-sm capitalize text-primary"
            onClick={() => setCartProduct(product)}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  ));
};

export default ProductCards;
