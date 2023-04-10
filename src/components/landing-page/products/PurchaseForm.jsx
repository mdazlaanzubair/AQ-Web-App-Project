import { useState } from "react";
import { useCartContext } from "../../../context/cart/CartContext";
import { useEffect } from "react";

const PurchaseForm = () => {
  const { cartProduct, setOrder } = useCartContext();

  const [qty, setQty] = useState(1);
  const [chosenSize, setChosenSize] = useState(cartProduct?.sizes[0]);
  const [total, setTotal] = useState(cartProduct?.price);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const placeOrder = (e) => {
    e.preventDefault();

    const newOrder = {
      order_details: {
        qty,
        total,
        chosenSize,
        product: cartProduct,
      },
      customer_details: {
        username,
        email,
        contact,
      },
    };

    confirm(JSON.stringify(newOrder));
  };

  useEffect(
    () => setTotal(parseFloat(qty * cartProduct?.price).toFixed(2)),
    [qty]
  );

  return (
    <>
      <input type="checkbox" id="purchase_form" className="modal-toggle" />
      <label htmlFor="purchase_form" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <div className="card bg-base-100">
            {/* <figure className="py-3">
              <img
                src={cartProduct?.img}
                className="rounded-box shadow-lg"
                alt="Product"
              />
            </figure> */}
            <div className="card-body">
              <h2 className="card-title">{cartProduct?.name}</h2>
              <p>{cartProduct?.description}</p>
              <form className="form" onSubmit={placeOrder}>
                <table className="table table-compact w-full mt-3 overflow-x-scroll">
                  <thead>
                    <tr>
                      <th colSpan={2}>Customer Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Name:</th>
                      <td>
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="input input-sm border border-base-300 focus:outline-none w-full"
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                          minLength="3"
                          maxLength="30"
                          required
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Email:</th>
                      <td>
                        <input
                          type="email"
                          placeholder="e.g. abc@example.com"
                          className="input input-sm border border-base-300 focus:outline-none w-full"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          required
                          autoComplete="true"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Contact:</th>
                      <td>
                        <input
                          type="text"
                          placeholder="e.g. (+92) XXX XXXXXXX"
                          className="input input-sm border border-base-300 focus:outline-none w-full"
                          onChange={(e) => setContact(e.target.value)}
                          value={contact}
                          maxLength="14"
                          required
                        />
                      </td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th colSpan={2}>Order Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Sizes ({chosenSize}):</th>
                      <td>
                        {cartProduct?.sizes?.map((size, index) => (
                          <label
                            key={index}
                            className="label cursor-pointer inline-block"
                          >
                            <span className="label-text">
                              <kbd
                                className={`kbd ${
                                  size === chosenSize
                                    ? "bg-primary text-primary-content"
                                    : ""
                                }`}
                              >
                                {size}
                              </kbd>
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
                          className="input input-sm border border-base-300 focus:outline-none w-full"
                          onChange={(e) => {
                            const qtyValue = parseInt(e.target.value);
                            if (
                              !isNaN(qtyValue) &&
                              qtyValue >= 1 &&
                              qtyValue <= cartProduct?.stock
                            ) {
                              setQty(qtyValue);
                            }
                          }}
                          value={qty}
                          min="0"
                          max="99"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th>Unit Price ($):</th>
                      <td>{cartProduct?.price}</td>
                    </tr>
                    <tr>
                      <th>Total Cost ($):</th>
                      <td>{total}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="card-actions justify-end">
                  <button
                    type="submit"
                    className="btn btn-primary btn-sm capitalize"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </label>
      </label>
    </>
  );
};

export default PurchaseForm;
