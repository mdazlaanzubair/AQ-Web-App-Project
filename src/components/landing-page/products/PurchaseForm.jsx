import { useState } from "react";
import { useCartContext } from "../../../context/cart/CartContext";

const PurchaseForm = () => {
  const { cartProduct, setCartProduct } = useCartContext();
  const [chosenSize, setChosenSize] = useState();
  const [qty, setQty] = useState(1);

  return (
    <div>
      <input type="checkbox" id="purchase_form" className="modal-toggle" />
      <label htmlFor="purchase_form" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="card bg-base-100">
            <figure className="py-3">
              <img
                src={cartProduct?.img}
                className="rounded-box shadow-lg"
                alt="Product"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cartProduct?.name}</h2>
              <p>{cartProduct?.description}</p>
              <table className="table table-compact w-full mt-3 overflow-x-scroll">
                <tr>
                  <th>Sizes ({chosenSize}):</th>
                  <td>
                    {cartProduct?.sizes?.map((size, index) => (
                      <label
                        key={index}
                        className="label cursor-pointer inline-block"
                      >
                        <span className="label-text">
                          <kbd className="kbd">{size}</kbd>
                        </span>
                        <input
                          type="radio"
                          name="size"
                          value={size}
                          onChange={(e) => setChosenSize(e.target.value)}
                          checked={size === chosenSize ? "checked" : ""}
                          hidden
                        />
                      </label>
                    ))}
                  </td>
                </tr>
                <tr>
                  <th>Quantity ({qty}):</th>
                  <td>
                    <input
                      type="number"
                      placeholder="How much?"
                      className="input input-group-sm border-none focus:outline-none"
                      onChange={(e) => setQty(e.target.value)}
                      max="2"
                    //   value={qty}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Unit Price ($):</th>
                  <td>{cartProduct?.price}</td>
                </tr>
                <tr>
                  <th>Total Cost ($):</th>
                  <td>{cartProduct?.price}</td>
                </tr>
              </table>
              <div className="form"></div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm capitalize">
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </label>
      </label>
    </div>
  );
};

export default PurchaseForm;
