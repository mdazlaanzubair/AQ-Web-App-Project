import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: "1",
      name: "Product 1",
      sizes: ["S", "M"],
      category: "T-Shirt",
      stock: 11,
      price: 11.99,
      img: "/product_images/tshirt.jpg",
      // img: "https://picsum.photos/200/300",
      desc: "Description of product 1.",
    },
    {
      id: "2",
      name: "Product 2",
      sizes: ["S", "M", "L"],
      category: "Pant",
      stock: 21,
      price: 21.99,
      img: "/product_images/hoodie.jpeg",
      // img: "https://picsum.photos/200/300",
      desc: "Description of product 2.",
    },
    {
      id: "3",
      name: "Product 3",
      sizes: ["S", "M", "L", "XL"],
      category: "Jersey",
      stock: 31,
      price: 31.99,
      img: "/product_images/jersey.jpeg",
      // img: "https://picsum.photos/200/300",
      desc: "Description of product 3.",
    },
    {
      id: "4",
      name: "Product 4",
      sizes: ["S", "M", "L", "XL", "2XL"],
      category: "Hoodie",
      stock: 41,
      price: 41.99,
      img: "/product_images/hoodies.jpeg",
      // img: "https://picsum.photos/200/300",
      desc: "Description of product 4.",
    },
    {
      id: "5",
      name: "Product 5",
      sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
      category: "Jersey",
      stock: 51,
      price: 51.99,
      img: "/product_images/hoodies.jpeg",
      // img: "https://picsum.photos/200/300",
      desc: "Description of product 5.",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState({});

  // products CUD functions
  // 1. ADD NEW PRODUCT
  const addNewProduct = (product) => {
    setProducts([product, ...products]);
  };

  // 2. UPDATE SINGLE PRODUCT
  const updateProduct = (id, updatedProduct) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          return { ...product, ...updatedProduct };
        }
        return product;
      })
    );
  };

  // 3. DELETE SINGLE PRODUCT
  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

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
