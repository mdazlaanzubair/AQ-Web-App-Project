import { useEffect, useState } from "react";
import { useContentContext } from "../../../context/content/ContentContext";
import ProductCards from "./ProductCards";
import PurchaseForm from "./PurchaseForm";
import { useCartContext } from "../../../context/cart/CartContext";

const Products = () => {
  const { appContent } = useContentContext();
  const { cartProduct } = useCartContext();

  const listOfProducts = appContent?.products_section?.products;

  const listOfCategories = [
    ...new Set(listOfProducts.map((product) => product.category)),
  ];

  const [filteredProducts, setFilteredProducts] = useState(listOfProducts);
  const [filterQuery, setFilterQuery] = useState("All");

  const productsFilter = (filterQuery) => {
    if (filterQuery !== "All") {
      const matchedItems = listOfProducts.filter((product) =>
        product.category.toLowerCase().includes(filterQuery.toLowerCase())
      );

      setFilteredProducts(matchedItems);
    } else {
      setFilteredProducts(listOfProducts);
    }
  };

  useEffect(() => {
    productsFilter(filterQuery);
  }, [filterQuery]);

  return (
    <section id="products-section" className="py-3">
      <div className="hero bg-base-100 rounded-box">
        <div className="hero-content text-center py-10">
          <div className="">
            <div className="max-w-3xl md:max-w-lg lg:max-w-3xl mx-auto">
              <h1 className="text-5xl font-bold">
                {appContent?.products_section?.content.title}
              </h1>
              <p className="py-6">
                {appContent?.products_section?.content.para}
              </p>
            </div>
            <div className="container m-auto grid ">
              <div className="col mb-10">
                <div className="tabs justify-center">
                  <a
                    className={`tab tab-bordered ${
                      filterQuery === "All" ? "tab-active" : ""
                    }`}
                    onClick={() => setFilterQuery("All")}
                  >
                    All
                  </a>
                  {listOfCategories?.map((category, index) => (
                    <a
                      className={`tab tab-bordered ${
                        filterQuery === category ? "tab-active" : ""
                      }`}
                      key={index}
                      onClick={() => setFilterQuery(category)}
                    >
                      {category}
                    </a>
                  ))}
                </div>
              </div>
              <div className="col grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                <ProductCards products={filteredProducts} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PURCHASE PRODUCT FORM */}
      {cartProduct ? <PurchaseForm /> : ""}
    </section>
  );
};

export default Products;
