import { useCartContext } from "../../../context/cart/CartContext";

const PurchaseForm = () => {
  const { cartProduct, setCartProduct } = useCartContext();

  return (
    <div>
      <input
        type="checkbox"
        id="purchase_form"
        className="modal-toggle"
      />
      <label
        htmlFor="purchase_form"
        className="modal cursor-pointer"
      >
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label>
    </div>
  );
};

export default PurchaseForm;
