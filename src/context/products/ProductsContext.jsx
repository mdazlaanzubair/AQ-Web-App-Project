import axios from "axios";

import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState({});

  // products CUD functions
  // 1. ADD NEW PRODUCT
  const addNewProduct = async (product) => {
    // updating state
    setProducts([product, ...products]);

    try {
      // requesting api
      await axios.request({
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        url: "https://test.rkcustomapparel.com/api/products",
        data: JSON.stringify(product),
        maxBodyLength: Infinity,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 2. UPDATE SINGLE PRODUCT
  const updateProduct = async (id, updatedProduct) => {
    // updating state
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, ...updatedProduct };
        }
        return product;
      })
    );

    try {
      // requesting api
      await axios.request({
        method: "put",
        maxBodyLength: Infinity,
        url: "https://test.rkcustomapparel.com/api/products/" + id,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(updatedProduct),
      });
    } catch (error) {
      console.log(error);
    }
  };

  // 3. DELETE SINGLE PRODUCT
  const deleteProduct = (id) => {
    // requesting api
    setProducts(products.filter((product) => product.id !== id));

    axios
      .request({
        method: "delete",
        maxBodyLength: Infinity,
        url: "https://test.rkcustomapparel.com/api/products/" + id,
        headers: {
          Authorization:
            "Bearer Bearer 1|HuR0HBz5TKgU6MhVWcNzykbWcW923YasMMS31A5R",
        },
      })
      .catch((error) => console.log(error));
  };

  // 4. GET ALL PRODUCTS
  const getAllProducts = async () => {
    try {
      // requesting api
      const response = await axios.request({
        method: "get",
        maxBodyLength: Infinity,
        url: "https://test.rkcustomapparel.com/api/products",
        headers: {
          Authorization:
            "Bearer Bearer 1|HuR0HBz5TKgU6MhVWcNzykbWcW923YasMMS31A5R",
        },
      });

      // updating state
      setProducts(response.data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  // fetching products on initial loading of app component
  useEffect(() => getAllProducts, []);

  const value = {
    products,
    setProducts,
    selectedProduct,
    setSelectedProduct,
    addNewProduct,
    updateProduct,
    deleteProduct,
  };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
