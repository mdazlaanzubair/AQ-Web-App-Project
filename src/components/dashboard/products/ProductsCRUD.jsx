import { useEffect, useState } from "react";
import { useProductsContext } from "../../../context/products/ProductsContext";
import ProductForm from "./ProductForm";

const ProductsCRUD = () => {
  const { products, setSelectedProduct, deleteProduct } = useProductsContext();

  const [filteredProducts, setFilteredProducts] = useState(products);

  const productsFilter = (search_word) => {
    const matchedItems = products.filter((product) =>
      product.name.toLowerCase().includes(search_word.toLowerCase()) ||
      product.desc.toLowerCase().includes(search_word.toLowerCase())
        ? product
        : ""
    );

    setFilteredProducts(matchedItems);
  };

  useEffect(() => setFilteredProducts(products), [products]);

  return (
    <section id="dashboard_section" className="py-3">
      <div className="w-full flex flex-row justify-between items-center mb-10 gap-3">
        <input
          type="text"
          placeholder="Search by product name…"
          className="input input-bordered focus:outline-none w-full"
          onChange={(e) => productsFilter(e.target.value)}
        />
        <label
          htmlFor="popup_form"
          className="btn btn-primary"
          onClick={() => {
            setSelectedProduct({});
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
          Add Product
        </label>
      </div>
      <div className="hero bg-base-200 rounded-box">
        <div className="hero-content text-center py-10">
          <div className="max-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProducts?.map((product, index) => (
              <div className="card bg-base-100 hover:shadow-lg" key={index}>
                <figure>
                  <img
                    src={
                      product?.img.length === 0
                        ? "https://picsum.photos/200/300"
                        : product?.img
                    }
                    alt={product?.name}
                    className="h-80 rounded-box"
                  />
                </figure>
                <div className="card-body px-2">
                  <div className="product_details">
                    <h1 className="card-title pl-2 font-bold">
                      {product?.name}
                    </h1>
                    <p className="text-sm my-3 text-start pl-2">
                      {product?.desc}
                    </p>
                    <div className="overflow-x-auto my-2">
                      <table className="table table-compact w-full">
                        <tbody>
                          <tr className="hover">
                            <th colSpan="2">Details</th>
                          </tr>
                          <tr className="hover">
                            <th>Sizes Available</th>
                            <td>
                              {product?.sizes?.map((size, index) => (
                                <div
                                  className="badge badge-ghost mr-1"
                                  key={index}
                                >
                                  {size}
                                </div>
                              ))}
                            </td>
                          </tr>
                          <tr className="hover">
                            <th>Category</th>
                            <td>
                              <div className="badge badge-primary">
                                {product?.category}
                              </div>
                            </td>
                          </tr>
                          <tr className="hover">
                            <th>Available Stock(s)</th>
                            <td>{product?.stock}</td>
                          </tr>
                          <tr className="hover">
                            <th>Unit Cost</th>
                            <td>{product?.price}</td>
                          </tr>
                          <tr className="hover">
                            <th>Total Stock Cost</th>
                            <td>
                              {Math.round(product?.price * product?.stock)}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-actions justify-end px-5">
                    <label
                      className="btn btn-primary"
                      htmlFor="popup_form"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Edit
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4 ml-2"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                        <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                      </svg>
                    </label>
                    <button
                      className="btn btn-outline btn-neutral"
                      onClick={() => deleteProduct(product?.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProductForm />
    </section>
  );
};

export default ProductsCRUD;
